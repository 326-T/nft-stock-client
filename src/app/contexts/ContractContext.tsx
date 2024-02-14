'use client'

import { createContext, useContext } from 'react'
import { useContractRead } from '@thirdweb-dev/react'
import { Web3Context } from './Web3Context'
import { UUID } from 'crypto'
import { Offer, RecruitRight } from '@/types/contract'

export const ContractContext = createContext<{
  tokens: RecruitRight[]
  offers: Offer[]
  findTokenByResumeUuid: (resumeUuid: UUID) => RecruitRight | undefined
  findOfferByResumeUuidAndCompanyUuid: (resumeUuid: UUID, companyUuid: UUID) => Offer | undefined
}>({
  tokens: [],
  offers: [],
  findTokenByResumeUuid: () => undefined,
  findOfferByResumeUuidAndCompanyUuid: () => undefined,
})

export function ContractProvider({ children }: { children: React.ReactNode }) {
  const { contract, isReady } = useContext(Web3Context)
  const { data: tokens, error: tokenErrors } = useContractRead(contract, 'getAllTokens')
  const { data: offers, error: offerErrors } = useContractRead(contract, 'getAllOffers')

  const findTokenByResumeUuid = (resumeUuid: UUID): RecruitRight => {
    return tokens.find((token: RecruitRight) => token.studentId === resumeUuid)
  }

  const findOfferByResumeUuidAndCompanyUuid = (resumeUuid: UUID, companyUuid: UUID): Offer => {
    const token: RecruitRight = findTokenByResumeUuid(resumeUuid)
    return offers
      .filter((offer: Offer) => offer.tokenId === token.tokenId)
      .find((offer: Offer) => offer.companyId === companyUuid)
  }

  return (
    <ContractContext.Provider
      value={{
        tokens,
        offers,
        findTokenByResumeUuid,
        findOfferByResumeUuidAndCompanyUuid,
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}
