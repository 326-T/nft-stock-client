'use client'

import { ethers } from 'ethers'
import { useContext } from 'react'
import { useContract, useContractWrite } from '@thirdweb-dev/react'
import { EnvContext } from './EnvContext'

export const useReverseRecruitContract = () => {
  const envContext = useContext(EnvContext)
  const { contract } = useContract(envContext.contractAddress)
  const { mutateAsync, isLoading, error } = useContractWrite(contract, 'issueRecruitRight')

  const issueRecruitRight = async (price: number) => {
    const _price = ethers.utils.parseUnits(price.toString(), 'ether')
    mutateAsync({ args: [_price] })
  }

  return { issueRecruitRight }
}
