import { Offer } from '@/types/offer'
import OfferCard from './OfferCard'

export default function OfferStack({ offers }: { offers: Offer[] }) {
  return (
    <div className='flex w-full md:w-1/2 px-5 md:px-10 align-bottom'>
      <ul className='block w-full p-5 space-y-5 bg-blue-100 rounded-lg'>
        {offers.map((offer) => (
          <li key={offer.uuid}>
            <OfferCard offer={offer} />
          </li>
        ))}
      </ul>
    </div>
  )
}
