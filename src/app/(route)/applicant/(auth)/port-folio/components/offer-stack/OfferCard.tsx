import { Offer } from '@/types/offer'

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div
      className='
        flex justify-between w-full py-5 px-5 space-x-3 bg-white rounded-lg
      '
    >
      <h2 className='body-medium w-1/3'>{offer.companyName}</h2>
      <h2 className='body-medium w-1/3'>{offer.price}</h2>
      <h2 className='body-medium w-1/3'>{offer.message}</h2>
    </div>
  )
}
