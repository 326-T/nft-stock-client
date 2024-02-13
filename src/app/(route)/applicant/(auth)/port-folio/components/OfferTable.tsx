'use client'

import SortButton, { SortState } from '@/components/table/SortButton'
import { useListItem } from '@/hooks/useListItem'
import { acceptOffer, rejectOffer } from '@/services/offerApi'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'
import { Offer } from '@/types/offer'
import { decodeDate } from '@/utils/dateUtil'
import { UUID } from 'crypto'
import { useMemo } from 'react'

export default function OfferTable({
  offers,
  onAccept,
  onReject,
}: {
  offers: Offer[]
  onAccept: (offerId: UUID) => void
  onReject: (offerId: UUID) => void
}) {
  const { acceptOfferContract } = useReverseRecruitContract()  //TODO:オファーID一旦固定を修正したい
  const headers = ['会社名', '価格', '更新日', 'ステータス']
  const sortKeys = ['companyName', 'price', 'updatedAt', 'status']
  const sortCondition = useListItem<SortState>(sortKeys.map(() => 'NONE'))

  const sorted: Offer[] = useMemo(() => {
    const sorted = [...offers]
    sortCondition.state.forEach((sortState: SortState, index: number) => {
      if (sortState === 'NONE') return
      sorted.sort((a: Offer, b: Offer) => {
        if (sortState === 'ASC') {
          return a[sortKeys[index] as keyof Offer]
            .toString()
            .localeCompare(b[sortKeys[index] as keyof Offer].toString())
        } else {
          return b[sortKeys[index] as keyof Offer]
            .toString()
            .localeCompare(a[sortKeys[index] as keyof Offer].toString())
        }
      })
    })
    return sorted
  }, [sortCondition.state, offers])

  return (
    <table
      className='
        w-full
        table table-auto table-pin-rows
        table-xs md:table-md
      '
    >
      <thead>
        <tr>
          {headers.map((header: string, index: number) => (
            <th key={index}>
              <div className='flex items-center space-x-2'>
                <h5>{header}</h5>
                <SortButton
                  onChange={(sortState: SortState) => sortCondition.update(index, sortState)}
                />
              </div>
            </th>
          ))}
          <th />
        </tr>
      </thead>
      <tbody>
        {sorted.map((row: Offer, index: number) => (
          <tr key={index} className='hover'>
            <td key={index}>{row.companyName}</td>
            <td key={index}>{row.price}</td>
            <td key={index}>{decodeDate(row.updatedAt)}</td>
            <td key={index}>{row.status}</td>
            <td className='w-52'>
              {offers[index].status === 'PENDING' ? (
                <div className='flex'>
                  <button onClick={() => {acceptOffer(row.uuid);acceptOfferContract('0');}} className='btn w-24 rounded-l-full'>
                    <p className='title-small'>了承する</p>
                  </button>
                  <button onClick={() => rejectOffer(row.uuid)} className='btn w-24 rounded-r-full'>
                    <p className='title-small'>断る</p>
                  </button>
                </div>
              ) : (
                <></>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
