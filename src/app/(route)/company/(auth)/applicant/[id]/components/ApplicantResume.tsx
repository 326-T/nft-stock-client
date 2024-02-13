'use client'

import TextArea from '@/components/TextArea'
import PassportPhoto from '@/components/entry-form/PassportPhoto'
import { findResumeByUuid } from '@/services/resumeApi'
import { Resume } from '@/types/resume'
import { UUID } from 'crypto'
import { useEffect, useState } from 'react'

export default function ApplicantResume({ resumeUuid }: { resumeUuid: UUID }) {
  const [resume, setResume] = useState<Resume | undefined>(undefined)

  useEffect(() => {
    findResumeByUuid(resumeUuid).then((res) => setResume(res.data))
  }, [])

  return (
    <>
      {resume && (
        <div
          className='
            block md:flex
            justify-center w-full
            space-x-10
          '
        >
          <div
            className='
            w-full md:w-1/6
            space-y-5 md:space-y-10
          '
          >
            <PassportPhoto url={resume.picture} />
          </div>
          <div
            className='
            w-full md:w-3/4
            space-y-2
          '
          >
            <TextArea label='経歴' value={resume.education} setValue={() => {}} />
            <TextArea label='経験' value={resume.experience} setValue={() => {}} />
            <TextArea label='スキル・資格' value={resume.skills} setValue={() => {}} />
            <TextArea label='興味・関心' value={resume.interests} setValue={() => {}} />
            <TextArea label='参照URL' value={resume.urls} setValue={() => {}} />
          </div>
        </div>
      )}
    </>
  )
}
