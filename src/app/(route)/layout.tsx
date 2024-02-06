'use client'

import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider supportedWallets={[metamaskWallet({ recommended: true })]}>
      {children}
    </ThirdwebProvider>
  )
}
