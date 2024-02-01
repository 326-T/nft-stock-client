'use client'

import { useState } from 'react'
import { postCompany } from '@/services/companyApi'
import Input from '@/components/Input'
import { CompanyRequest, companyRequestInit } from '@/types/company'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUpForm() {
  const [companyRequest, setCompanyRequest] = useState<CompanyRequest>(companyRequestInit)
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const router = useRouter()
  const postCompanyRequest = () => {
    postCompany(companyRequest)
      .then((res) => router.push('/company/apply-for'))
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
            label='企業名'
            value={companyRequest.name}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, name: value }))}
          />
          <Input
            label='メールアドレス'
            value={companyRequest.email}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, email: value }))}
          />
          <Input
            label='電話番号'
            value={companyRequest.phone}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, phone: value }))}
          />
          <Input
            label='住所'
            value={companyRequest.address}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, address: value }))}
          />
          <Input
            label='パスワード'
            value={companyRequest.password}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, password: value }))}
          />
          <Input label='パスワード (確認)' value={passwordConfirm} setValue={setPasswordConfirm} />
          <Link href='/company/sign-in'>
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
        <button
          className='
            btn
            rounded-none md:rounded-full
            w-full md:w-1/5
          '
          onClick={postCompanyRequest}
        >
          <p className='title-small'>登録</p>
        </button>
      </div>
    </div>
  )
}
