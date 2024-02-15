'use client'

import { Offer } from '@/types/offer'
import PriceChart from '@/components/applicant-port-folio/PriceChart'
import CurrentHolder from '@/components/applicant-port-folio/CurrentHolder'
import { expectPayment, rejectOffer } from '@/services/offerApi'
import OfferTable from './OfferTable'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'

export default function PortFolioContainer({
  offers,
  fetchOffers,
  disableAction,
}: {
  offers: Offer[]
  fetchOffers: () => void
  disableAction: boolean
}) {
  const { acceptOffer } = useReverseRecruitContract()

  const onAccept = async (offer: Offer) =>
    acceptOffer(offer.resumeUuid, offer.companyUuid).then(() =>
      expectPayment(offer.uuid).then(() => fetchOffers()),
    )
  const onReject = async (offer: Offer) => rejectOffer(offer.uuid).then(() => fetchOffers())

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
        <OfferTable
          offers={offers}
          onAccept={onAccept}
          onReject={onReject}
          disableAction={disableAction}
        />
      </div>
    </div>
  )
}
