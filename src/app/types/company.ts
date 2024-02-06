export interface Company {
  id: string
  name: string
  email: string
  phone: string
  address: string
  metamaskAddress: string
}

export interface CompanyRequest {
  id: string
  name: string
  email: string
  phone: string
  address: string
  password: string
  metamaskAddress: string
}

export const companyRequestInit = {
  id: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  metamaskAddress: '',
}
