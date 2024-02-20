import { Company, CompanyRequest } from '@/types/company'
import axios, { AxiosPromise } from 'axios'

export const fetchCompanys = (): AxiosPromise<Company> =>
  axios.get('http://localhost:8080/api/v1/companies')

export const fetchCurrentCompany = (): AxiosPromise<Company> =>
  axios.get('http://localhost:8080/api/v1/companies/current')

export const getCompany = (uuid: string): AxiosPromise<Company> =>
  axios.get(`http://localhost:8080/api/v1/companies/${uuid}`)

export const postCompany = (body: CompanyRequest): AxiosPromise<Company> =>
  axios.post('http://localhost:8080/api/v1/companies', body)

export const loginCompany = (body: CompanyRequest): AxiosPromise<Company> =>
  axios.post('http://localhost:8080/api/v1/companies/login', body)

export const patchCompany = (body: CompanyRequest): AxiosPromise<Company> =>
  axios.patch(`http://localhost:8080/api/v1/companies/${body.uuid}`, body)
