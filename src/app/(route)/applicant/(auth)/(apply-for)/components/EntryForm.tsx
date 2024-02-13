'use client'

import { ResumeRequest, resumeRequestInit } from '@/types/resume'
import { useContext, useEffect, useState } from 'react'
import TextArea from '@/components/TextArea'
import { getMine, patchResume, postResume } from '@/services/resumeApi'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'
import Input from '@/components/Input'
import { Web3Context } from '@/contexts/Web3Context'
import PassportPhoto from '@/components/entry-form/PassportPhoto'

export default function EntryForm() {
  const [resumeRequest, setResumeRequest] = useState<ResumeRequest>(resumeRequestInit)
  const [price, setPrice] = useState<number>(0)
  const [isFirstPost, setIsFirstPost] = useState<boolean>(true)
  const { issueRecruitRight } = useReverseRecruitContract()
  const { isReady } = useContext(Web3Context)

  const postResumeRequest = async () => {
    if (isFirstPost) {
      Promise.all([
        postResume(resumeRequest)
          .then((res) => setIsFirstPost(false))
          .catch((err) => console.log(err)),
        issueRecruitRight(price)
          .then((res) => console.log(res))
          .catch((err) => console.log(err)),
      ])
      return
    }
    patchResume(resumeRequest)
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
          <PassportPhoto url={resumeRequest.picture} onUpload={() => {}} />
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
          disabled={isFirstPost && !isReady}
        >
          <p className='title-small'>{isFirstPost ? '募集開始' : '履歴書更新'}</p>
        </button>
      </div>
    </div>
  )
}
