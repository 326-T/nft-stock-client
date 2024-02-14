'use client'

import PrimaryButton from '@/components/button/PrimaryButton'
import SortButton, { SortState } from '@/components/table/SortButton'
import { useListItem } from '@/hooks/useListItem'
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
  onAccept: (offer: Offer) => void
  onReject: (offer: Offer) => void
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
          <tr key={row.uuid} className='hover'>
            <td key='companyName'>{row.companyName}</td>
            <td key='price'>{row.price}</td>
            <td key='updatedAt'>{decodeDate(row.updatedAt)}</td>
            <td key='status'>{row.status}</td>
            <td className='w-52'>
              {offers[index].status === 'PENDING' ? (
                <>
                  <div className='flex'>
                    <PrimaryButton onClick={() => onAccept(row)} label='了承する' />
                    <PrimaryButton onClick={() => onReject(row)} label='断る' />
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
