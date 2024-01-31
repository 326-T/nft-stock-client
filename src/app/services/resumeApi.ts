import { Resume, ResumeRequest } from '@/types/Resume'
import axios, { AxiosPromise } from 'axios'

export const fetchResumes = (): AxiosPromise<Resume> =>
  axios.get('http://localhost:8080/api/v1/resume')

export const postResume = (body: ResumeRequest): AxiosPromise<Resume> =>
  axios.post('http://localhost:8080/api/v1/resume', body)
