'use client'

import { ethers } from 'ethers'
import { useContext } from 'react'
import { Web3Context } from '@/contexts/Web3Context'
import { useContractWrite } from '@thirdweb-dev/react'
import { UUID } from 'crypto'
import { ContractContext } from '@/contexts/ContractContext'
import { Offer, RecruitRight } from '@/types/contract'

export const useReverseRecruitContract = () => {
  const { contract, isReady } = useContext(Web3Context)
  const { findTokenByResumeUuid, findOfferByResumeUuidAndCompanyUuid } = useContext(ContractContext)
  const { mutateAsync: issueRecruitRightMutate } = useContractWrite(contract, 'issueRecruitRight')
  const { mutateAsync: makeOfferMutate } = useContractWrite(contract, 'makeOffer')
  const { mutateAsync: burnMutate } = useContractWrite(contract, 'burn')

  const issueRecruitRight = async (price: number, resumeUuid: UUID) => {
    if (!isReady) return
    const _price = ethers.utils.parseUnits(price.toString(), 'ether')
    return issueRecruitRightMutate({ args: [_price, resumeUuid] })
  }

  const makeOffer = async (resumeUuid: UUID, companyUuid: UUID, price: number) => {
    if (!isReady) return
    const token: RecruitRight | undefined = findTokenByResumeUuid(resumeUuid)
    if (!token) return
    const _price = ethers.utils.parseUnits(price.toString(), 'ether')
    return makeOfferMutate({ args: [token.tokenId, _price, companyUuid] })
  }

  const burn = async (token: string) => {
    if (!isReady) return
    burnMutate({ args: [Number(token)] })
  }

  return { issueRecruitRight, makeOffer, burn, contract }
}
