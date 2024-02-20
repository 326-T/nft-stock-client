import { Resume, ResumeRequest } from '@/types/resume'
import axios, { AxiosPromise } from 'axios'
import { UUID } from 'crypto'

export const fetchResumes = (): AxiosPromise<Resume[]> => axios.get('/api/v1/resumes')

export const getMine = (): AxiosPromise<Resume[]> => axios.get('/api/v1/resumes/applicant')

export const findResumeByUuid = (uuid: UUID): AxiosPromise<Resume> =>
  axios.get(`/api/v1/resumes/${uuid}`)

export const postResume = (body: ResumeRequest): AxiosPromise<Resume> =>
  axios.post('/api/v1/resumes', body)

export const patchResume = (body: ResumeRequest): AxiosPromise<Resume> => {
  return axios.patch(`/api/v1/resumes/${body.uuid?.toString()}`, body)
}

export const mintResume = (uuid: UUID, minimumPrice: number): AxiosPromise<Resume> =>
  axios.patch(`/api/v1/resumes/${uuid}/mint`, { minimumPrice })

export const expireResume = (uuid: UUID): AxiosPromise<Resume> =>
  axios.patch(`/api/v1/resumes/${uuid}/expire`)
