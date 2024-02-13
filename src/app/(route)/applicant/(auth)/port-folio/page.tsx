'use client'

import ResponsiveContainer from '@/components/ResponsiveContainer'
import PortFolioContainer from '@/components/applicant-port-folio/PortFolioContainer'
import { getMine } from '@/services/resumeApi'
import { Resume } from '@/types/resume'
import { useEffect, useState } from 'react'

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
      {resume && <PortFolioContainer resumeUuid={resume.uuid} />}
    </ResponsiveContainer>
  )
}
