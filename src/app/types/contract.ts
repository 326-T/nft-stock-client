import { UUID } from 'crypto'
import { ethers } from 'ethers'

export interface RecruitRight {
  tokenId: ethers.BigNumber
  price: ethers.BigNumber
  issuer: string
  owner: string
  studentId: UUID
  isValid: boolean
}

export interface Offer {
  offerId: ethers.BigNumber
  tokenId: ethers.BigNumber
  amount: ethers.BigNumber
  offeror: string
  owner: string
  issuer: string
  companyId: UUID
  isAccepted: boolean
  isRejected: boolean
}
