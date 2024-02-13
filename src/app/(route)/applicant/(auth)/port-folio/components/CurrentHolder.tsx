'use client'

import { Offer } from '@/types/offer'
import { useMemo } from 'react'

export default function CurrentHolder({ offers }: { offers: Offer[] }) {
  const currentHolder = useMemo(() => offers.findLast((offer) => offer.statusId === 1), [offers])

  return (
    <div className='block justify-end'>
      <h2 className='w-full py-5 text-end title-large border-b-2'>{currentHolder?.companyName}</h2>
      <h2 className='w-full py-5 text-end title-large border-b-2'>{currentHolder?.price} ETH</h2>
    </div>
  )
}
