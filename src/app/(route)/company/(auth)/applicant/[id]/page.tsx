'use client'

import ResponsiveContainer from '@/components/ResponsiveContainer'
import { UUID } from 'crypto'
import { useParams } from 'next/navigation'
import PortFolioContainer from './components/PortFolioContainer'
import ApplicantResume from './components/ApplicantResume'
import OfferForm from './components/OfferForm'
import StickyHeader from '@/components/StickyHeader'
import { useContext, useEffect, useMemo, useState } from 'react'
import { Resume } from '@/types/resume'
import { findResumeByUuid } from '@/services/resumeApi'
import MintStatusBadge from '@/components/applicant-port-folio/MintStatusBadge'
import { Offer } from '@/types/offer'
import { findOffersByResumeUuid } from '@/services/offerApi'
import { AuthContext } from '@/contexts/AuthContext'
import Tag from '@/components/tag/Tag'
import PaymentConfirm from './components/PaymentConfirm'

export default function Page() {
  const params = useParams()
  const [resume, setResume] = useState<Resume | undefined>(undefined)
  const [offers, setOffers] = useState<Offer[]>([])
  const { company } = useContext(AuthContext)

  const pendingOffer = useMemo(
    () =>
      offers
        .filter((offer) => offer.companyUuid === company?.uuid)
        .find((offer) => offer.statusId === 0),
    [offers],
  )

  const paymentOffer = useMemo(
    () =>
      offers
        .filter((offer) => offer.companyUuid === company?.uuid)
        .find((offer) => offer.statusId === 1),
    [offers],
  )

  useEffect(() => {
    findResumeByUuid(params.id as UUID).then((res) => setResume(res.data))
  }, [])

  useEffect(() => {
    if (!resume) return
    findOffersByResumeUuid(resume.uuid).then((res) => {
      setOffers(res.data)
    })
  }, [resume])

  return (
    <ResponsiveContainer>
      {resume && (
        <div className='space-y-10'>
          {resume.mintStatusId === 1 && (
            <StickyHeader>
              {pendingOffer && <Tag text='オファーの確認待ち' />}
              {paymentOffer && <PaymentConfirm offer={paymentOffer} />}
              {!paymentOffer && !pendingOffer && <OfferForm resume={resume} />}
            </StickyHeader>
          )}
          <MintStatusBadge mintStatusId={resume.mintStatusId} />
          <ApplicantResume resume={resume} />
          <div className='divider' />
          <PortFolioContainer offers={offers} />
        </div>
      )}
    </ResponsiveContainer>
  )
}
