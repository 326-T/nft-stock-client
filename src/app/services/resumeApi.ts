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
  console.log('body', body)
  return axios.patch(`/api/v1/resumes/${body.uuid?.toString()}`, body)
}
