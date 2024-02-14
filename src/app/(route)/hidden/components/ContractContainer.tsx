'use client'

import { useContext } from 'react'
import { ContractContext } from '@/contexts/ContractContext'
import SortedTable from '@/components/table/SortedTable'
import { Offer, RecruitRight } from '@/types/contract'

export default function ContractContainer() {
  const contractContext = useContext(ContractContext)

  return (
    <div className='block p-10 justify-center items-center space-y-10'>
      <h1 className='text-4xl font-bold'>Token一覧</h1>
      {contractContext.tokens && contractContext.tokens.length > 0 && (
        <SortedTable
          rows={contractContext.tokens.map((token: RecruitRight) => [
            token.tokenId.toString(),
            token.price.toString(),
            token.issuer,
            token.owner,
            token.studentId.toString(),
          ])}
          headers={['TokenId', 'Price', 'Issuer', 'Owner', 'StudentId']}
        />
      )}
      <h1 className='text-4xl font-bold'>Offer一覧</h1>
      {contractContext.offers && contractContext.offers.length > 0 && (
        <SortedTable
          rows={contractContext.offers.map((offer: Offer) => [
            offer.offerId.toString(),
            offer.tokenId.toString(),
            offer.amount.toString(),
            offer.offeror,
            offer.owner,
            offer.issuer,
            offer.companyId.toString(),
          ])}
          headers={['OfferId', 'TokenId', 'Amount', 'Offeror', 'Owner', 'Issuer', 'CompanyId']}
        />
      )}
    </div>
  )
}
