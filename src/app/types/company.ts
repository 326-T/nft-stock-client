export interface Company {
  id: string
  name: string
  email: string
  phone: string
  address: string
}

export interface CompanyRequest {
  id: string
  name: string
  email: string
  phone: string
  address: string
  password: string
}

export const companyRequestInit = {
  id: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  password: '',
}
