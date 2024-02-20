'use client'

import { useEffect, useMemo, useState } from 'react'
import ResponsiveContainer from '@/components/ResponsiveContainer'
import { getMine } from '@/services/resumeApi'
import { Resume } from '@/types/resume'
import PortFolioContainer from './components/PortFolioContainer'
import ExpireForm from './components/ExpireForm'
import { UUID } from 'crypto'
import StickyHeader from '@/components/StickyHeader'
import MintStatusBadge from '@/components/applicant-port-folio/MintStatusBadge'
import { Offer } from '@/types/offer'
import { findOffersByResumeUuid } from '@/services/offerApi'
import WaitForPayment from './components/WaitForPayment'
import Tag from '@/components/tag/Tag'

export default function Page() {
  const [offers, setOffers] = useState<Offer[]>([])
  const [resume, setResume] = useState<Resume | undefined>(undefined)
  const fetchOffers = async () => {
    if (resume)
      findOffersByResumeUuid(resume.uuid).then((res) => {
        setOffers(res.data)
      })
  }

  const disableAction = useMemo(() => {
    return offers.some((offer) => offer.statusId === 1)
  }, [offers])

  useEffect(() => {
    fetchOffers()
  }, [resume])

  useEffect(() => {
    getMine().then((res) => {
      if (res.data[0]) {
        setResume(res.data[0])
      }
    })
  }, [])

  return (
    <ResponsiveContainer>
      {resume && (
        <>
          <div className='space-y-10'>
            {resume.mintStatusId === 1 && (
              <StickyHeader>
                {disableAction ? (
                  <Tag text='支払い処理待ち' />
                ) : (
                  <ExpireForm resumeUuid={resume.uuid as UUID} />
                )}
              </StickyHeader>
            )}
            <MintStatusBadge mintStatusId={resume.mintStatusId} />
            <PortFolioContainer
              offers={offers}
              fetchOffers={fetchOffers}
              disableAction={disableAction}
            />
          </div>
        </>
      )}
    </ResponsiveContainer>
  )
}
