'use client'

import { ethers } from 'ethers'
import { useContext } from 'react'
import { Web3Context } from '@/contexts/Web3Context'
import { useContractWrite } from '@thirdweb-dev/react'
import { UUID } from 'crypto'
import { ContractContext } from '@/contexts/ContractContext'
import { Offer, RecruitRight } from '@/types/contract'
import { LoadingContext } from '@/contexts/LoadingContext'

export const useReverseRecruitContract = () => {
  const { state, turnOn, turnOff } = useContext(LoadingContext)
  const { contract, isReady } = useContext(Web3Context)
  const { findTokenByResumeUuid, findOfferByResumeUuidAndCompanyUuid } = useContext(ContractContext)
  const { mutateAsync: issueRecruitRightMutate } = useContractWrite(contract, 'issueRecruitRight')
  const { mutateAsync: makeOfferMutate } = useContractWrite(contract, 'makeOffer')
  const { mutateAsync: acceptOfferMutate } = useContractWrite(contract, 'acceptOffer')
  const { mutateAsync: buyRecruitRightsMutate } = useContractWrite(contract, 'buyRecruitRights')
  const { mutateAsync: stopRecruitRightsMutate } = useContractWrite(contract, 'stopRecruitRights')
  const { mutateAsync: burnMutate } = useContractWrite(contract, 'burn')

  const issueRecruitRight = async (price: number, resumeUuid: UUID) => {
    if (!isReady) return
    const _price = ethers.utils.parseUnits(price.toString(), 'ether')
    turnOn()
    return issueRecruitRightMutate({ args: [_price, resumeUuid] })
      .then((res) => {
        turnOff()
        return Promise.resolve(res)
      })
      .catch((err) => {
        turnOff()
        return Promise.reject(err)
      })
  }

  const makeOffer = async (resumeUuid: UUID, companyUuid: UUID, price: number): Promise<any> => {
    if (!isReady) return Promise.reject('not ready')
    const token: RecruitRight | undefined = findTokenByResumeUuid(resumeUuid)
    if (!token) return Promise.reject('token not found')
    const _price = ethers.utils.parseUnits(price.toString(), 'ether')
    turnOn()
    return makeOfferMutate({ args: [token.tokenId, _price, companyUuid] })
      .then((res) => {
        turnOff()
        return Promise.resolve(res)
      })
      .catch((err) => {
        turnOff()
        return Promise.reject(err)
      })
  }

  const acceptOffer = async (resumeUuid: UUID, companyUuid: UUID): Promise<any> => {
    if (!isReady) return Promise.reject('not ready')
    const offer: Offer | undefined = findOfferByResumeUuidAndCompanyUuid(resumeUuid, companyUuid)
    if (!offer) return Promise.reject('offer not found')
    turnOn()
    return acceptOfferMutate({ args: [offer.offerId] })
      .then((res) => {
        turnOff()
        return Promise.resolve(res)
      })
      .catch((err) => {
        turnOff()
        return Promise.reject(err)
      })
  }

  const buyRecruitRights = async (resumeUuid: UUID, companyUuid: UUID): Promise<any> => {
    if (!isReady) return Promise.reject('not ready')
    const offer: Offer | undefined = findOfferByResumeUuidAndCompanyUuid(resumeUuid, companyUuid)
    if (!offer) return Promise.reject('offer not found')
    turnOn()
    return buyRecruitRightsMutate({ args: [offer.offerId], overrides: { value: offer.amount } })
      .then((res) => {
        turnOff()
        return Promise.resolve(res)
      })
      .catch((err) => {
        turnOff()
        return Promise.reject(err)
      })
  }

  const stopRecruitRights = async (resumeUuid: UUID): Promise<any> => {
    if (!isReady) return Promise.reject('not ready')
    const token: RecruitRight | undefined = findTokenByResumeUuid(resumeUuid)
    if (!token) return Promise.reject('token not found')
    turnOn()
    return stopRecruitRightsMutate({ args: [token.tokenId] })
      .then((res) => {
        turnOff()
        return Promise.resolve(res)
      })
      .catch((err) => {
        turnOff()
        return Promise.reject(err)
      })
  }

  const burn = async (token: string) => {
    if (!isReady) return
    turnOn()
    burnMutate({ args: [Number(token)] })
      .then((res) => {
        turnOff()
        return Promise.resolve(res)
      })
      .catch((err) => {
        turnOff()
        return Promise.reject(err)
      })
  }

  return {
    issueRecruitRight,
    makeOffer,
    acceptOffer,
    buyRecruitRights,
    stopRecruitRights,
    burn,
    contract,
  }
}
