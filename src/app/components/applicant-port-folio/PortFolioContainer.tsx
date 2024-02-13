'use client'

import { Offer } from '@/types/offer'
import PriceChart from './PriceChart'
import OfferStack from './OfferTable'
import CurrentHolder from './CurrentHolder'
import { useEffect, useState } from 'react'
import { findOffersByResumeUuid } from '@/services/offerApi'
import { UUID } from 'crypto'

export default function PortFolioContainer({ resumeUuid }: { resumeUuid: UUID }) {
  const [offers, setOffers] = useState<Offer[]>([])

  useEffect(() => {
    findOffersByResumeUuid(resumeUuid).then((res) => {
      setOffers(res.data)
    })
  }, [resumeUuid])
  return (
    <div className='block space-y-10'>
      <div className='flex w-full space-y-10'>
        <PriceChart offers={offers} />
        <div className='w-2/5'>
          <CurrentHolder offers={offers} />
        </div>
      </div>
      <OfferStack offers={offers} />
    </div>
  )
}
