'use client'

import PrimaryButton from '@/components/button/PrimaryButton'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'
import { acceptOffer } from '@/services/offerApi'
import { Offer } from '@/types/offer'

export default function PaymentConfirm({ offer }: { offer: Offer }) {
  const { buyRecruitRights } = useReverseRecruitContract()

  const handleOffer = () => {
    buyRecruitRights(offer.resumeUuid, offer.companyUuid).then(() => acceptOffer(offer.uuid))
  }

  return (
    <div
      className='
        flex items-center justify-end
        space-x-10
      '
    >
      <h2 className='title-medium'>{offer.price} ETH</h2>
      <PrimaryButton onClick={handleOffer} label='支払いを行い内定権を獲得する' company />
    </div>
  )
}
