'use client'

import { createContext, useContext, useMemo } from 'react'
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
  const { contract } = useContract(envContext.contractAddress, abi)
  const address = useAddress()
  const connect = useConnect()

  const isReady = useMemo(() => {
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
