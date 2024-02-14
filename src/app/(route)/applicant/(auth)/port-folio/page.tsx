'use client'

import { useEffect, useState } from 'react'
import ResponsiveContainer from '@/components/ResponsiveContainer'
import { getMine } from '@/services/resumeApi'
import { Resume } from '@/types/resume'
import PortFolioContainer from './components/PortFolioContainer'
import ExpireForm from './components/ExpireForm'
import { UUID } from 'crypto'
import StickyHeader from '@/components/StickyHeader'
import MintStatusBadge from '@/components/applicant-port-folio/MintStatusBadge'

export default function Page() {
  const [resume, setResume] = useState<Resume | undefined>(undefined)

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
                <ExpireForm resumeUuid={resume.uuid as UUID} />
              </StickyHeader>
            )}
            <MintStatusBadge mintStatusId={resume.mintStatusId} />
            <PortFolioContainer resumeUuid={resume.uuid} />
          </div>
        </>
      )}
    </ResponsiveContainer>
  )
}
