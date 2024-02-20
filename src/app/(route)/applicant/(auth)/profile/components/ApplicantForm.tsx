'use client'

import { ApplicantRequest, applicantRequestInit } from '@/types/applicant'
import { useContext, useEffect, useState } from 'react'
import TextArea from '@/components/TextArea'
import { getApplicant, patchApplicant } from '@/services/applicantApi'
import { AuthContext } from '@/contexts/AuthContext'
import PrimaryButton from '@/components/button/PrimaryButton'

export default function ApplicantForm() {
  const authContext = useContext(AuthContext)
  const [applicantRequest, setApplicantRequest] = useState<ApplicantRequest>(applicantRequestInit)

  const get = async (uuid: string) => {
    getApplicant(uuid)
      .then((res) => setApplicantRequest(res.data))
      .catch((err) => console.log(err))
  }

  const patch = async () => {
    patchApplicant(applicantRequest)
      .then((res) => get(res.data.uuid))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (authContext.applicant) get(authContext.applicant.uuid)
  }, [authContext.applicant])

  return (
    <div className='block'>
      <div className='block md:flex justify-center w-full'>
        <div
          className='
            w-full md:w-2/4
            py-5 px-10 md:py-10
            space-y-5 md:space-y-10
          '
        >
          <TextArea
            label='名前'
            value={applicantRequest.firstName}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, firstName: value }))}
          />
          <TextArea
            label='名字'
            value={applicantRequest.lastName}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, lastName: value }))}
          />
          <TextArea
            label='メールアドレス'
            value={applicantRequest.email}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, email: value }))}
          />
          <TextArea
            label='電話番号'
            value={applicantRequest.phone}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, phone: value }))}
          />
          <TextArea
            label='住所'
            value={applicantRequest.address}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, address: value }))}
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
        <PrimaryButton onClick={patch} label='更新' />
      </div>
    </div>
  )
}
