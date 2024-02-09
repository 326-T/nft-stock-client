export interface Company {
  id: string
  uuid: string
  name: string
  email: string
  phone: string
  address: string
  metamaskAddress: string
}

export interface CompanyRequest {
  id: string
  uuid: string
  name: string
  email: string
  phone: string
  address: string
  password?: string
  metamaskAddress: string
}

export const companyRequestInit = {
  id: '',
  uuid: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  metamaskAddress: '',
}
