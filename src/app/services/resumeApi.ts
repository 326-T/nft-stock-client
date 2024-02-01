import { Resume, ResumeRequest } from '@/types/resume'
import axios, { AxiosPromise } from 'axios'

export const fetchResumes = (): AxiosPromise<Resume> =>
  axios.get('http://localhost:8080/api/v1/resumes')

export const postResume = (body: ResumeRequest): AxiosPromise<Resume> =>
  axios.post('http://localhost:8080/api/v1/resumes', body)
