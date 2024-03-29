'use client'

import { useState } from 'react'
import { loginApplicant } from '@/services/applicantApi'
import Input from '@/components/Input'
import { ApplicantRequest, applicantRequestInit } from '@/types/applicant'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import PrimaryButton from '@/components/button/PrimaryButton'

export default function SignInForm() {
  const [applicantRequest, setApplicantRequest] = useState<ApplicantRequest>(applicantRequestInit)
  const router = useRouter()
  const postApplicantRequest = () => {
    loginApplicant(applicantRequest)
      .then((res) => router.push('/applicant'))
      .catch((err) => console.log(err))
  }

  return (
    <div className='block'>
      <div className='flex justify-center w-full'>
        <div
          className='
            w-full md:w-2/3
            py-5 px-10 md:py-10
            space-y-5
          '
        >
          <Input
            label='メールアドレス'
            value={applicantRequest.email}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, email: value }))}
            type='email'
          />
          <Input
            label='パスワード'
            value={applicantRequest.password === undefined ? '' : applicantRequest.password}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, password: value }))}
            type='password'
          />
          <Link href='/applicant/sign-up'>
            <h3 className='pt-5 md:p-10 text-center text-blue-500 underline'>アカウント新規作成</h3>
          </Link>
        </div>
      </div>
      <div
        className='
          fixed bottom-0 md:static
          md:flex md:justify-center
          w-full
        '
      >
        <PrimaryButton onClick={postApplicantRequest} label='ログイン' />
      </div>
    </div>
  )
}
