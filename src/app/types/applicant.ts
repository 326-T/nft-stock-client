export interface Applicant {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  metamaskAddress: string
}

export interface ApplicantRequest {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  password: string
  metamaskAddress: string
}

export const applicantRequestInit = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  metamaskAddress: '',
}
