'use client'

import { useEffect, useMemo, useState } from 'react'
import ItemContainer from './components/ItemContainer'
import { Resume } from '@/types/resume'
import { fetchResumes } from '@/services/resumeApi'

export default function HomePage() {
  const [resumes, setResumes] = useState<Resume[]>([])

  useEffect(() => {
    fetchResumes().then((res) => setResumes(res.data))
  }, [])

  return <ItemContainer resumes={resumes} />
}
