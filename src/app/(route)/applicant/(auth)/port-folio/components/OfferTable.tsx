'use client'

import PrimaryButton from '@/components/button/PrimaryButton'
import SortButton, { SortState } from '@/components/table/SortButton'
import { useListItem } from '@/hooks/useListItem'
import { acceptOffer, rejectOffer } from '@/services/offerApi'
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
                <>
                  <div className='flex'>
                    <PrimaryButton onClick={() => onAccept(row.uuid)} label='了承する' />
                    <PrimaryButton onClick={() => onReject(row.uuid)} label='断る' />
                  </div>
                </>
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
