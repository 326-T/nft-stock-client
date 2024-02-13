'use client'

import { useEffect, useState } from 'react'
import ResponsiveContainer from '@/components/ResponsiveContainer'
import { getMine } from '@/services/resumeApi'
import { Resume } from '@/types/resume'
import PortFolioContainer from './components/PortFolioContainer'

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
      <div className='p-5' />
      {resume && <PortFolioContainer resumeUuid={resume.uuid} />}
    </ResponsiveContainer>
  )
}
