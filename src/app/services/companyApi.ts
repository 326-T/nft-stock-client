import { Company, CompanyRequest } from '@/types/company'
import axios, { AxiosPromise } from 'axios'

export const fetchCompanys = (): AxiosPromise<Company> =>
  axios.get('http://localhost:8080/api/v1/companies')

export const postCompany = (body: CompanyRequest): AxiosPromise<Company> =>
  axios.post('http://localhost:8080/api/v1/companies', body)

export const loginCompany = (body: CompanyRequest): AxiosPromise<Company> =>
  axios.post('http://localhost:8080/api/v1/companies/login', body)
