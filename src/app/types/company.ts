import { UUID } from 'crypto'

export interface Company {
  id: string
  uuid: UUID
  name: string
  email: string
  phone: string
  address: string
  metamaskAddress: string
}

export interface CompanyRequest {
  id: string
  uuid: UUID | undefined
  name: string
  email: string
  phone: string
  address: string
  password?: string
  metamaskAddress: string
}

export const companyRequestInit = {
  id: '',
  uuid: undefined,
  name: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  metamaskAddress: '',
}
