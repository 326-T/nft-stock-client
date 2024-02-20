'use client'

import { EnvContext } from '@/contexts/EnvContext'
import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react'
import { Sepolia } from '@thirdweb-dev/chains'
import { useContext } from 'react'
import ClientOnly from '@/components/ClientOnly'
import Loading from '@/components/Loading'
import { Web3Provider } from '@/contexts/Web3Context'
import DrawerRight from '@/components/drawer/DrawerRIght'
import { ContractProvider } from '@/contexts/ContractContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  const envContext = useContext(EnvContext)

  return (
    <ClientOnly>
      <Loading />
      <DrawerRight />
      <ThirdwebProvider
        supportedWallets={[metamaskWallet({ recommended: true })]}
        activeChain={Sepolia}
        clientId={envContext.apiKey}
      >
        <Web3Provider>
          <ContractProvider>{children}</ContractProvider>
        </Web3Provider>
      </ThirdwebProvider>
    </ClientOnly>
  )
}
