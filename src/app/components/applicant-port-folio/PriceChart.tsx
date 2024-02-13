'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Offer } from '@/types/offer'
import { decodeDate } from '@/utils/dateUtil'
import { useMemo } from 'react'

export default function PriceChart({ offers }: { offers: Offer[] }) {
  const accepted = useMemo(
    () =>
      offers
        .filter((offer) => offer.statusId === 1)
        .map((offer) => ({
          name: decodeDate(offer.updatedAt),
          ETH: offer.price,
        })),
    [offers],
  )

  return accepted.length === 0 ? (
    <div>応募がありません</div>
  ) : (
    <ResponsiveContainer width='100%' aspect={3 / 1}>
      <LineChart
        width={500}
        height={300}
        data={accepted}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='ETH' stroke='#8884d8' activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
