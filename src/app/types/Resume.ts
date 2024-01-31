export interface Resume {
  id: string
  applicantId: string
  education: string
  experience: string
  skills: string
  interests: string
  references: string
  createdAt: Date
  updatedAt: Date
  version: number
}

export interface ResumeRequest {
  id: string
  applicantId: string
  education: string
  experience: string
  skills: string
  interests: string
  references: string
}

export const resumeRequestInit = {
  id: '',
  applicantId: '',
  education: '',
  experience: '',
  skills: '',
  interests: '',
  references: '',
}
