'use client'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { LoadingContext } from './LoadingContext'
import { EnvContext } from './EnvContext'

export const AxiosContext = createContext<{}>({})

export function AxiosProvider({ children }: { children: React.ReactNode }) {
  const [isAxiosReady, setIsAxiosReady] = useState(false)
  const loadingContext = useContext(LoadingContext)
  const envContext = useContext(EnvContext)

  const setUpAxios = () => {
    axios.defaults.withCredentials = true
    axios.interceptors.request.clear()
    axios.interceptors.response.clear()
    axios.defaults.baseURL = envContext.baseUrl
    axios.interceptors.request.use((config) => {
      loadingContext.turnOn()
      return config
    })
    axios.interceptors.response.use(
      (response) => {
        loadingContext.turnOff()
        return response
      },
      (error) => {
        loadingContext.turnOff()
        if (error.response?.status === 401) {
          window.location.href = '/sign-up'
        }
        return Promise.reject(error)
      },
    )
    setIsAxiosReady(true)
  }

  useEffect(() => {
    !isAxiosReady && setUpAxios()
  })

  return <AxiosContext.Provider value={{}}>{isAxiosReady && children}</AxiosContext.Provider>
}
