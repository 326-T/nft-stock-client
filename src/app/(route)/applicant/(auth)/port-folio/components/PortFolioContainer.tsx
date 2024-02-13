import { Offer } from '@/types/offer'
import PriceChart from './PriceChart'
import OfferStack from './OfferTable'
import CurrentHolder from './CurrentHolder'

export default function PortFolioContainer({ offers }: { offers: Offer[] }) {
  return (
    <div className='block space-y-10'>
      <div className='flex w-full space-y-10'>
        <PriceChart offers={offers} />
        <div className='w-2/5'>
          <CurrentHolder offers={offers} />
        </div>
      </div>
      <OfferStack offers={offers} />
    </div>
  )
}
