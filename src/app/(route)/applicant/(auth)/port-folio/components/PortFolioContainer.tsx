'use client'

import { Offer } from '@/types/offer'
import PriceChart from '@/components/applicant-port-folio/PriceChart'
import CurrentHolder from '@/components/applicant-port-folio/CurrentHolder'
import { useEffect, useState } from 'react'
import {
  acceptOffer as acceptOfferApi,
  findOffersByResumeUuid,
  rejectOffer,
} from '@/services/offerApi'
import { UUID } from 'crypto'
import OfferTable from './OfferTable'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'

export default function PortFolioContainer({ resumeUuid }: { resumeUuid: UUID }) {
  const [offers, setOffers] = useState<Offer[]>([])
  const { acceptOffer } = useReverseRecruitContract()

  const fetchOffers = async () =>
    findOffersByResumeUuid(resumeUuid).then((res) => {
      setOffers(res.data)
    })
  const onAccept = async (offer: Offer) =>
    acceptOffer(offer.resumeUuid, offer.companyUuid).then(() =>
      acceptOfferApi(offer.uuid).then(() => fetchOffers()),
    )
  const onReject = async (offer: Offer) => rejectOffer(offer.uuid).then(() => fetchOffers())

  useEffect(() => {
    fetchOffers()
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
        <OfferTable offers={offers} onAccept={onAccept} onReject={onReject} />
      </div>
    </div>
  )
}
