'use client'

import { useState } from 'react'
import { loginCompany } from '@/services/companyApi'
import Input from '@/components/Input'
import { CompanyRequest, companyRequestInit } from '@/types/company'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignInForm() {
  const [companyRequest, setCompanyRequest] = useState<CompanyRequest>(companyRequestInit)
  const router = useRouter()
  const postCompanyRequest = () => {
    loginCompany(companyRequest)
      .then((res) => router.push('/company'))
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
            value={companyRequest.email}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, email: value }))}
            type='email'
          />
          <Input
            label='パスワード'
            value={companyRequest.password}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, password: value }))}
            type='password'
          />
          <Link href='/company/sign-up'>
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
        <button
          className='
            btn
            rounded-none md:rounded-full
            w-full md:w-1/5
          '
          onClick={postCompanyRequest}
        >
          <p className='title-small'>ログイン</p>
        </button>
      </div>
    </div>
  )
}
