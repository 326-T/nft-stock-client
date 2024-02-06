'use client'

import axios, { AxiosInstance } from 'axios'
import { createContext, useEffect, useState } from 'react'

export const EnvContext = createContext<{
  baseUrl: string
  contractAddress: string
  apiKey: string
}>({
  baseUrl: '',
  contractAddress: '',
  apiKey: '',
})

export function EnvProvider({ children }: { children: React.ReactNode }) {
  const [isEnvReady, setIsEnvReady] = useState(false)
  const [baseUrl, setBaseUrl] = useState<string>('')
  const [contractAddress, setContractAddress] = useState<string>('')
  const [apiKey, setApiKey] = useState<string>('')

  useEffect(() => {
    if (isEnvReady) return
    const frontClient: AxiosInstance = axios.create()
    frontClient
      .get('/api/env')
      .then((res) => {
        setBaseUrl(res.data.baseUrl)
        setContractAddress(res.data.contractAddress)
        setApiKey(res.data.apiKey)
      })
      .finally(() => {
        setIsEnvReady(true)
      })
  }, [])

  return (
    <EnvContext.Provider value={{ baseUrl, contractAddress, apiKey }}>
      {isEnvReady && children}
    </EnvContext.Provider>
  )
}
