'use client'

import { Offer } from '@/types/offer'
import PriceChart from '@/components/applicant-port-folio/PriceChart'
import CurrentHolder from '@/components/applicant-port-folio/CurrentHolder'
import { useEffect, useState } from 'react'
import { findOffersByResumeUuid } from '@/services/offerApi'
import { UUID } from 'crypto'
import SortedTable from '@/components/table/SortedTable'
import { decodeDate } from '@/utils/dateUtil'

export default function PortFolioContainer({ resumeUuid }: { resumeUuid: UUID }) {
  const [offers, setOffers] = useState<Offer[]>([])

  useEffect(() => {
    findOffersByResumeUuid(resumeUuid).then((res) => {
      setOffers(res.data)
    })
  }, [resumeUuid])
  return offers.length === 0 ? (
    <h1>まだオファーがありません。</h1>
  ) : (
    <div className='block space-y-10'>
      <div className='flex w-full space-y-10'>
        <PriceChart offers={offers} />
        <div className='w-2/5'>
          <CurrentHolder offers={offers} />
        </div>
      </div>
      <div className='flex w-full h-96 overflow-y-scroll'>
        <SortedTable
          headers={['企業名', '金額', '更新日時', 'ステータス']}
          rows={offers.map((offer) => [
            offer.companyName,
            offer.price.toLocaleString(),
            decodeDate(offer.updatedAt),
            offer.status,
          ])}
        />
      </div>
    </div>
  )
}
