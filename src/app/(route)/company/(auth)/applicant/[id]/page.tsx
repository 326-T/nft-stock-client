'use client'

import ResponsiveContainer from '@/components/ResponsiveContainer'
import { UUID } from 'crypto'
import { useParams } from 'next/navigation'
import PortFolioContainer from './components/PortFolioContainer'
import ApplicantResume from './components/ApplicantResume'
import OfferForm from './components/OfferForm'
import StickyHeader from '@/components/StickyHeader'
import { useEffect, useState } from 'react'
import { Resume } from '@/types/resume'
import { findResumeByUuid } from '@/services/resumeApi'
import MintStatusBadge from '@/components/applicant-port-folio/MintStatusBadge'

export default function Page() {
  const params = useParams()
  const [resume, setResume] = useState<Resume | undefined>(undefined)

  useEffect(() => {
    findResumeByUuid(params.id as UUID).then((res) => setResume(res.data))
  }, [])

  return (
    <ResponsiveContainer>
      {resume && (
        <div className='space-y-10'>
          {resume.mintStatusId === 1 && (
            <StickyHeader>
              <OfferForm resume={resume} />
            </StickyHeader>
          )}
          <MintStatusBadge mintStatusId={resume.mintStatusId} />
          <ApplicantResume resume={resume} />
          <div className='divider' />
          <PortFolioContainer resumeUuid={params.id as UUID} />
        </div>
      )}
    </ResponsiveContainer>
  )
}
