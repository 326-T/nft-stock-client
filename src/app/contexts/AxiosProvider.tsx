'use client'
import axios, { AxiosInstance } from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { LoadingContext } from './LoadingProvider'

export const AxiosContext = createContext<{}>({})

export function AxiosProvider({ children }: { children: React.ReactNode }) {
  const [isAxiosReady, setIsAxiosReady] = useState(false)
  const loadingContext = useContext(LoadingContext)

  const setUpAxios = async () => {
    const frontClient: AxiosInstance = axios.create()
    frontClient
      .get('api/axios')
      .then((res) => {
        axios.interceptors.request.clear()
        axios.interceptors.response.clear()
        axios.defaults.baseURL = res.data.baseUrl
        axios.defaults.headers.common['Authorization'] = res.data.authorization
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
            return Promise.reject(error)
          },
        )
      })
      .finally(() => {
        setIsAxiosReady(true)
      })
  }

  useEffect(() => {
    !isAxiosReady && setUpAxios()
  })

  return <AxiosContext.Provider value={{}}>{isAxiosReady && children}</AxiosContext.Provider>
}
