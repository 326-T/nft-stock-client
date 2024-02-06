'use client'

import { EnvContext } from '@/contexts/EnvContext'
import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react'
import { Sepolia } from '@thirdweb-dev/chains'
import { useContext } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const envContext = useContext(EnvContext)
  const customChain = {
    ...Sepolia,
    chainId: 11155111,
    rpc: [envContext.apiKey],
  }

  return (
    <ThirdwebProvider
      supportedWallets={[metamaskWallet({ recommended: true })]}
      activeChain={customChain}
    >
      {children}
    </ThirdwebProvider>
  )
}
