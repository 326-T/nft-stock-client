'use client'

import { ResumeRequest, resumeRequestInit } from '@/types/resume'
import { useEffect, useState } from 'react'
import TextArea from '@/components/TextArea'
import { findById } from '@/services/resumeApi'
import Image from 'next/image'
import { PiUserSquareDuotone } from 'react-icons/pi'
import { useParams } from 'next/navigation'

export default function EntryForm() {
  const params = useParams<{ id: string }>()
  const [resumeRequest, setResumeRequest] = useState<ResumeRequest>(resumeRequestInit)

  useEffect(() => {
    findById(params.id).then((res) => {
      setResumeRequest(res.data)
    })
  }, [])

  useEffect(() => {
    console.log('resumeRequest', resumeRequest)
  }, [resumeRequest])

  return (
    <div className='block'>
      <div className='block md:flex justify-center w-full'>
        <div
          className='
            w-full md:w-1/4
            py-5 px-10 md:py-10
            space-y-5 md:space-y-10
          '
        >
          <div className='flex w-full justify-center'>
            {resumeRequest.picture ? (
              <Image
                src={resumeRequest.picture}
                alt={''}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            ) : (
              <PiUserSquareDuotone
                width={0}
                height={0}
                size='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </div>
        </div>
        <div
          className='
            w-full md:w-2/4
            py-5 px-10 md:py-10
            space-y-5 md:space-y-10
          '
        >
          <TextArea
            label='経歴'
            value={resumeRequest.education}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, education: value }))}
          />
          <TextArea
            label='経験'
            value={resumeRequest.experience}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, experience: value }))}
          />
          <TextArea
            label='スキル・資格'
            value={resumeRequest.skills}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, skills: value }))}
          />
          <TextArea
            label='興味・関心'
            value={resumeRequest.interests}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, interests: value }))}
          />
          <TextArea
            label='参照URL'
            value={resumeRequest.urls}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, urls: value }))}
          />
        </div>
      </div>
    </div>
  )
}
