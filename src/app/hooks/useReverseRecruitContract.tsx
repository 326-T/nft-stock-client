'use client'

import { ethers } from 'ethers'
import { useContext } from 'react'
import { Web3Context } from '@/contexts/Web3Context'
import { useContractWrite } from '@thirdweb-dev/react'

export const useReverseRecruitContract = () => {
  const { contract, isReady } = useContext(Web3Context)
  const { mutateAsync: issueRecruitRightMutate } = useContractWrite(contract, 'issueRecruitRight')
  const { mutateAsync: burnMutate } = useContractWrite(contract, 'burn')

  const issueRecruitRight = async (price: number) => {
    if (!isReady) return
    const _price = ethers.utils.parseUnits(price.toString(), 'ether')
    issueRecruitRightMutate({ args: [_price] })
  }

  const burn = async (token: string) => {
    if (!isReady) return
    burnMutate({ args: [Number(token)] })
  }

  return { issueRecruitRight, burn, contract }
}
