'use client'

import ResponsiveContainer from '@/components/ResponsiveContainer'
import { UUID } from 'crypto'
import { useParams } from 'next/navigation'
import PortFolioContainer from './components/PortFolioContainer'
import ApplicantResume from './components/ApplicantResume'
import OfferForm from './components/OfferForm'

export default function Page() {
  const params = useParams()

  return (
    <ResponsiveContainer>
      <div className='space-y-10'>
        <div
          className='
            sticky top-[65px]
            w-full py-5
            bg-white border-b-2
          '
        >
          <OfferForm resumeUuid={params.id as UUID} />
        </div>
        <ApplicantResume resumeUuid={params.id as UUID} />
        <div className='divider' />
        <PortFolioContainer resumeUuid={params.id as UUID} />
      </div>
    </ResponsiveContainer>
  )
}
