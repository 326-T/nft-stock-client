'use client'

import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import PrimaryButton from '@/components/button/PrimaryButton'
import { AuthContext } from '@/contexts/AuthContext'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'
import { findOffersByResumeUuid, postOffer } from '@/services/offerApi'
import { Offer, OfferRequest, offerRequestInit } from '@/types/offer'
import { Resume } from '@/types/resume'
import { useContext, useEffect, useMemo, useState } from 'react'

export default function OfferForm({ resume }: { resume: Resume }) {
  const [offer, setOffer] = useState<OfferRequest>({ ...offerRequestInit, resumeUuid: resume.uuid })
  const [offers, setOffers] = useState<Offer[]>([])
  const { makeOffer } = useReverseRecruitContract()
  const { company } = useContext(AuthContext)

  const currentHolder = useMemo(() => {
    const current = offers.findLast((offer) => offer.statusId === 1)
    return current ? current : offerRequestInit
  }, [offers])
  const disabled = useMemo(() => {
    return offer.price < currentHolder.price || offer.price < resume.minimumPrice
  }, [offer])
  const warnText = useMemo(() => {
    const border =
      currentHolder.price < resume.minimumPrice ? resume.minimumPrice : currentHolder.price
    if (offer.price < border) {
      return `※ ${border}ETHより高い金額`
    }
    return undefined
  }, [currentHolder, offer.price])

  const handleOffer = () => {
    if (offer.resumeUuid === undefined || company === undefined) return
    makeOffer(offer.resumeUuid, company.uuid, offer.price).then(() => postOffer(offer))
  }

  useEffect(() => {
    findOffersByResumeUuid(resume.uuid).then((res) => {
      setOffers(res.data)
    })
  }, [resume.uuid])

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
