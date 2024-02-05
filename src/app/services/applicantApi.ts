import { Applicant, ApplicantRequest } from '@/types/applicant'
import axios, { AxiosPromise } from 'axios'

export const fetchApplicants = (): AxiosPromise<Applicant> =>
  axios.get('http://localhost:8080/api/v1/applicants')

export const fetchCurrentApplicant = (): AxiosPromise<Applicant> =>
  axios.get('http://localhost:8080/api/v1/applicants/current')

export const postApplicant = (body: ApplicantRequest): AxiosPromise<Applicant> =>
  axios.post('http://localhost:8080/api/v1/applicants', body)

export const loginApplicant = (body: ApplicantRequest): AxiosPromise<Applicant> =>
  axios.post('http://localhost:8080/api/v1/applicants/login', body)
