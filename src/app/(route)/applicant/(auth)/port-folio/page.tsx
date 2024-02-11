'use client'

import ResponsiveContainer from '@/components/ResponsiveContainer'
import PortFolioContainer from './components/PortFolioContainer'
import { useEffect, useState } from 'react'
import { findOffersByResumeUuid } from '@/services/offerApi'
import { Resume } from '@/types/resume'
import { getMine } from '@/services/resumeApi'
import { Offer } from '@/types/offer'

export default function Page() {
  const [resume, setResume] = useState<Resume | undefined>(undefined)
  const [offers, setOffers] = useState<Offer[]>([])

  useEffect(() => {
    getMine().then((res) => {
      if (res.data[0]) {
        setResume(res.data[0])
      }
    })
  }, [])

  useEffect(() => {
    if (!resume) return
    findOffersByResumeUuid(resume.uuid).then((res) => {
      setOffers(res.data)
    })
  }, [resume])

  return (
    <ResponsiveContainer>
      <PortFolioContainer offers={offers} />
    </ResponsiveContainer>
  )
}
