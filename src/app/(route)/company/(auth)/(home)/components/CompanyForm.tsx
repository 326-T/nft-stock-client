'use client'

import { CompanyRequest, companyRequestInit } from '@/types/company'
import { useContext, useEffect, useState } from 'react'
import TextArea from '@/components/TextArea'
import { getCompany, patchCompany } from '@/services/companyApi'
import { AuthContext } from '@/contexts/AuthContext'

export default function CompanyForm() {
  const authContext = useContext(AuthContext)
  const [companyRequest, setCompanyRequest] = useState<CompanyRequest>(companyRequestInit)

  const get = async (uuid: string) => {
    getCompany(uuid)
      .then((res) => setCompanyRequest(res.data))
      .catch((err) => console.log(err))
  }

  const patch = async () => {
    patchCompany(companyRequest)
      .then((res) => get(res.data.uuid))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if (authContext.company) get(authContext.company.uuid)
  }, [authContext.company])

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
            value={companyRequest.name}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, name: value }))}
          />
          <TextArea
            label='メールアドレス'
            value={companyRequest.email}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, email: value }))}
          />
          <TextArea
            label='電話番号'
            value={companyRequest.phone}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, phone: value }))}
          />
          <TextArea
            label='住所'
            value={companyRequest.address}
            setValue={(value) => setCompanyRequest((prev) => ({ ...prev, address: value }))}
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
          onClick={patch}
        >
          <p className='title-small'>{'更新'}</p>
        </button>
      </div>
    </div>
  )
}
