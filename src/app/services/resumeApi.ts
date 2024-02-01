import { Resume, ResumeRequest } from '@/types/resume'
import axios, { AxiosPromise } from 'axios'

export const fetchResumes = (): AxiosPromise<Resume> => axios.get('/api/v1/resumes')

export const getResume = (): AxiosPromise<Resume[]> => axios.get('/api/v1/resumes/applicant')

export const postResume = (body: ResumeRequest): AxiosPromise<Resume> =>
  axios.post('/api/v1/resumes', body)

export const patchResume = (body: ResumeRequest): AxiosPromise<Resume> => {
  console.log('body', body)
  return axios.patch(`/api/v1/resumes/${body.uuid?.toString()}`, body)
}
