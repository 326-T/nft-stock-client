import { UUID } from 'crypto'

export interface Resume {
  id: string
  uuid: UUID
  applicantId: string
  education: string
  experience: string
  skills: string
  interests: string
  urls: string
  picture: string
  mintStatus: string
  mintStatusId: number
  minimumPrice: number
  createdAt: Date
  updatedAt: Date
  version: number
}

export interface ResumeRequest {
  id: string
  uuid: UUID | undefined
  applicantId: string
  education: string
  experience: string
  skills: string
  interests: string
  urls: string
  picture: string
  mintStatus: string
  mintStatusId: number
  minimumPrice: number
}

export const resumeRequestInit = {
  id: '',
  uuid: undefined,
  applicantId: '',
  education: '',
  experience: '',
  skills: '',
  interests: '',
  urls: '',
  picture: '',
  mintStatus: '',
  mintStatusId: 0,
  minimumPrice: 0,
}
