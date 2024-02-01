export interface Applicant {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
}

export interface ApplicantRequest {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  password: string
}

export const applicantRequestInit = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  password: '',
}
