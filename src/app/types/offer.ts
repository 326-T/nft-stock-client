import { UUID } from 'crypto'

export interface Offer {
  id: string
  uuid: UUID
  resumeUuid: UUID
  companyUuid: UUID
  companyName: string
  price: number
  message: string
  statusId: number
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface OfferRequest {
  id: string
  uuid: UUID | undefined
  resumeUuid: UUID | undefined
  companyUuid: UUID | undefined
  companyName: string
  price: number
  message: string
  statusId: number
  status: string
  createdAt: Date
  updatedAt: Date
}

export const offerRequestInit = {
  id: '',
  uuid: undefined,
  resumeUuid: undefined,
  companyUuid: undefined,
  companyName: '',
  price: 0,
  message: '',
  statusId: 0,
  status: '',
  createdAt: new Date(),
  updatedAt: new Date(),
}
