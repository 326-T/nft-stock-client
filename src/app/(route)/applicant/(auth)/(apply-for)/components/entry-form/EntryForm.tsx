'use client'

import { ResumeRequest, resumeRequestInit } from '@/types/resume'
import { useEffect, useState } from 'react'
import TextArea from '@/components/TextArea'
import { getMine, patchResume, postResume } from '@/services/resumeApi'
import Image from 'next/image'
import { PiUserSquareDuotone } from 'react-icons/pi'
import { useReverseRecruitContract } from '@/contexts/ContractContext'
import Input from '@/components/Input'

export default function EntryForm() {
  const [resumeRequest, setResumeRequest] = useState<ResumeRequest>(resumeRequestInit)
  const [price, setPrice] = useState<number>(0)
  const [isFirstPost, setIsFirstPost] = useState<boolean>(true)
  const contract = useReverseRecruitContract()

  const postResumeRequest = () => {
    if (isFirstPost) {
      postResume(resumeRequest)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    patchResume(resumeRequest)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    contract
      .issueRecruitRight(price)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getMine().then((res) => {
      if (res.data[0]) {
        setResumeRequest(res.data[0])
        setIsFirstPost(false)
      }
    })
  }, [])

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
          <div className='flex justify-center'>
            <input type='file' className='file-input w-full max-w-xs' />
          </div>
          <Input
            label='希望金額'
            value={price.toString()}
            setValue={(value) => setPrice(Number(value))}
            type='number'
            step='0.01'
          />
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
          <p className='title-small'>募集開始</p>
        </button>
      </div>
    </div>
  )
}
