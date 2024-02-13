import { Offer } from '@/types/offer'
import SortedTable from '@/components/table/SortedTable'
import { decodeDate } from '@/utils/dateUtil'

export default function OfferTable({ offers }: { offers: Offer[] }) {
  return (
    <div className='flex w-full h-96 overflow-y-scroll'>
      <SortedTable
        headers={['企業名', '金額', '更新日時', 'ステータス']}
        rows={offers.map((offer) => [
          offer.companyName,
          offer.price.toLocaleString(),
          decodeDate(offer.updatedAt),
          offer.status,
        ])}
      />
    </div>
  )
}
