import { Offer } from '@/types/offer'
import LineChart from './LineChart'
import OfferStack from './offer-stack/OfferStack'

export default function PortFolioContainer({ offers }: { offers: Offer[] }) {
  return (
    <div className='block md:flex space-y-10'>
      <div className='block w-full md:w-1/2 space-y-10'>
        <LineChart />
        <div className='flex justify-end w-full'>
          <h2 className='w-full py-5 text-end title-large border-b-2'>ソフトバンク株式会社</h2>
        </div>
        <div className='flex justify-end w-full'>
          <h2 className='w-full py-5 text-end title-large border-b-2'>3,000,000円</h2>
        </div>
      </div>
      <OfferStack offers={offers} />
    </div>
  )
}
