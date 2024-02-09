'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { EnvContext } from './EnvContext'
import { abi } from '@/abi/abi'
import { useAddress, useConnect, useContract } from '@thirdweb-dev/react'

export const Web3Context = createContext<{
  contract: any
  isReady: boolean
}>({
  contract: undefined,
  isReady: false,
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const envContext = useContext(EnvContext)
  const { contract } = useContract(envContext.contractAddress, abi.abi)
  const address = useAddress()
  const connect = useConnect()

  const isReady = useMemo(() => {
    console.log('address', address)
    console.log('connect', connect)
    console.log('contract', contract)
    return !!address && !!connect && !!contract
  }, [address, connect, contract])

  return (
    <Web3Context.Provider
      value={{
        contract,
        isReady,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}
