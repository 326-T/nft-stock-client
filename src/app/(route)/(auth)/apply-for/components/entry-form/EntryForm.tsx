'use client'

import { ResumeRequest, resumeRequestInit } from '@/types/resume'
import { useState } from 'react'
import TextArea from '@/components/TextArea'
import { postResume } from '@/services/resumeApi'

export default function EntryForm() {
  const [resumeRequest, setResumeRequest] = useState<ResumeRequest>(resumeRequestInit)
  const postResumeRequest = () => {
    postResume(resumeRequest)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <div className='block'>
      <div className='flex justify-center w-full'>
        <div
          className='
            w-full md:w-2/3
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
            value={resumeRequest.references}
            setValue={(value) => setResumeRequest((prev) => ({ ...prev, references: value }))}
          />
        </div>
      </div>
      <div
        className='
          fixed bottom-0 md:static
          md:flex md:justify-center
          w-full
        '
      >
        <button
          className='
            btn
            rounded-none md:rounded-full
            w-full md:w-1/5
          '
          onClick={postResumeRequest}
        >
          <p className='title-small'>送信</p>
        </button>
      </div>
    </div>
  )
}
