'use client'

import { useState } from 'react'
import { postApplicant } from '@/services/applicantApi'
import Input from '@/components/Input'
import { ApplicantRequest, applicantRequestInit } from '@/types/applicant'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import PrimaryButton from '@/components/button/PrimaryButton'

export default function SignUpForm() {
  const [applicantRequest, setApplicantRequest] = useState<ApplicantRequest>(applicantRequestInit)
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const router = useRouter()
  const postApplicantRequest = () => {
    postApplicant(applicantRequest)
      .then((res) => router.push('/applicant'))
      .catch((err) => console.log(err))
  }

  return (
    <div className='block'>
      <div className='flex justify-center w-full'>
        <div
          className='
            w-full md:w-2/3
            pt-5 pb-24 px-10 md:py-10
            space-y-5
          '
        >
          <Input
            label='名字'
            value={applicantRequest.firstName}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, firstName: value }))}
          />
          <Input
            label='名前'
            value={applicantRequest.lastName}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, lastName: value }))}
          />
          <Input
            label='メールアドレス'
            value={applicantRequest.email}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, email: value }))}
            type='email'
          />
          <Input
            label='METAMASKアドレス'
            value={applicantRequest.metamaskAddress}
            setValue={(value) =>
              setApplicantRequest((prev) => ({ ...prev, metamaskAddress: value }))
            }
          />
          <Input
            label='電話番号'
            value={applicantRequest.phone}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, phone: value }))}
            type='tel'
          />
          <Input
            label='住所'
            value={applicantRequest.address}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, address: value }))}
          />
          <Input
            label='パスワード'
            value={applicantRequest.password === undefined ? '' : applicantRequest.password}
            setValue={(value) => setApplicantRequest((prev) => ({ ...prev, password: value }))}
            type='password'
          />
          <Input
            label='パスワード (確認)'
            value={passwordConfirm}
            setValue={setPasswordConfirm}
            type='password'
          />
          <Link href='/applicant/sign-in'>
            <h3 className='pt-5 md:p-10 text-center text-blue-500 underline'>
              すでにアカウントをお持ちの場合
            </h3>
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
        <PrimaryButton onClick={postApplicantRequest} label='登録' />
      </div>
    </div>
  )
}
