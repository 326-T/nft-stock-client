'use client'

import { ResumeRequest, resumeRequestInit } from '@/types/resume'
import { useContext, useEffect, useMemo, useState } from 'react'
import TextArea from '@/components/TextArea'
import { getMine, mintResume, patchResume, postResume } from '@/services/resumeApi'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'
import Input from '@/components/Input'
import { Web3Context } from '@/contexts/Web3Context'
import PassportPhoto from '@/components/entry-form/PassportPhoto'
import PrimaryButton from '@/components/button/PrimaryButton'

export default function EntryForm() {
  const [resumeRequest, setResumeRequest] = useState<ResumeRequest>(resumeRequestInit)
  const { issueRecruitRight } = useReverseRecruitContract()
  const { isReady } = useContext(Web3Context)

  const postResumeRequest = async () => {
    if (resumeRequest.id === undefined) {
      postResume(resumeRequest).catch((err) => console.log(err))
      return
    }
    patchResume(resumeRequest).catch((err) => console.log(err))
  }

  const mintable = useMemo(
    () =>
      isReady &&
      resumeRequest.uuid &&
      resumeRequest.mintStatusId === 0 &&
      resumeRequest.minimumPrice > 0,
    [isReady, resumeRequest],
  )

  useEffect(() => {
    getMine().then((res) => {
      if (res.data[0]) {
        setResumeRequest(res.data[0])
      }
    })
  }, [])

  return (
    <div className='block'>
      <div className='block md:flex justify-center w-full'>
        <div
          className='
            w-full md:w-1/3
            py-5 px-10 md:py-10
            space-y-5 md:space-y-10
          '
        >
          <PassportPhoto url={resumeRequest.picture} onUpload={() => {}} />
          <div className='flex items-end justify-between'>
            <Input
              label='希望金額'
              value={resumeRequest.minimumPrice.toString()}
              setValue={(value) =>
                setResumeRequest((prev) => ({ ...prev, minimumPrice: Number(value) }))
              }
              type='number'
              step='0.01'
              disabled={resumeRequest.mintStatusId === 1}
            />
            <PrimaryButton
              onClick={() =>
                mintable &&
                issueRecruitRight(resumeRequest.minimumPrice).then(
                  () =>
                    resumeRequest.uuid &&
                    mintResume(resumeRequest.uuid, resumeRequest.minimumPrice).then((res) =>
                      setResumeRequest((prev) => ({ ...prev, mintStatusId: 1 })),
                    ),
                )
              }
              label='発行'
            />
          </div>
        </div>
        <div
          className='
            w-full md:w-1/2
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
        <PrimaryButton onClick={postResumeRequest} label='履歴書更新' />
      </div>
    </div>
  )
}
