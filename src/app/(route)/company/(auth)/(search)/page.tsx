'use client'

import { useEffect, useMemo, useState } from 'react'
import ItemContainer from './components/ItemContainer'
import { Resume } from '@/types/resume'
import { fetchResumes } from '@/services/resumeApi'
import ResponsiveContainer from '@/components/ResponsiveContainer'

export default function HomePage() {
  const [resumes, setResumes] = useState<Resume[]>([])

  useEffect(() => {
    fetchResumes().then((res) => setResumes(res.data))
  }, [])

  return (
    <ResponsiveContainer>
      <div className='p-5' />
      <ItemContainer resumes={resumes} />
    </ResponsiveContainer>
  )
}
