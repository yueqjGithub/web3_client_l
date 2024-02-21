'use client'

import { WagmiProvider } from 'wagmi'
import { config } from '@/libs/wagmiConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const WagmiOutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default WagmiOutProvider
