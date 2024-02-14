'use client'

import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import PrimaryButton from '@/components/button/PrimaryButton'
import { findOffersByResumeUuid, postOffer } from '@/services/offerApi'
import { Offer, OfferRequest, offerRequestInit } from '@/types/offer'
import { UUID } from 'crypto'
import { useEffect, useMemo, useState } from 'react'

export default function OfferForm({ resumeUuid }: { resumeUuid: UUID }) {
  const [offer, setOffer] = useState<OfferRequest>({ ...offerRequestInit, resumeUuid: resumeUuid })
  const [offers, setOffers] = useState<Offer[]>([])

  const currentHolder = useMemo(() => offers.findLast((offer) => offer.statusId === 1), [offers])
  const disabled = useMemo(() => {
    return currentHolder && offer.price < currentHolder.price
  }, [offer])
  const warnText = useMemo(() => {
    if (currentHolder && offer.price < currentHolder.price) {
      return `※ ${currentHolder.price}ETHより高い金額`
    }
    return undefined
  }, [currentHolder, offer.price])

  const handleOffer = () => {
    postOffer(offer)
  }

  useEffect(() => {
    findOffersByResumeUuid(resumeUuid).then((res) => {
      setOffers(res.data)
    })
  }, [resumeUuid])

  return (
    <div
      className='
        flex items-end justify-end
        space-x-10
      '
    >
      <div className='w-1/2'>
        <TextArea
          label='メッセージ'
          value={offer.message}
          setValue={(value) => setOffer((prev) => ({ ...prev, message: value }))}
        />
      </div>
      <Input
        label='ETH'
        value={offer.price.toString()}
        warn={warnText}
        setValue={(value) => setOffer((prev) => ({ ...prev, price: Number(value) }))}
        type='number'
        step='0.01'
      />
      <PrimaryButton onClick={handleOffer} disabled={disabled} label='オファーする' company />
    </div>
  )
}
