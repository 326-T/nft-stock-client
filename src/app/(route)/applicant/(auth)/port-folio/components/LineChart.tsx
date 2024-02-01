'use client'

import { fetchStockPriceChanges } from '@/services/stockApi'
import { StockPriceChange } from '@/types/stock'
import { Line } from '@ant-design/charts'
import { useEffect, useMemo, useState } from 'react'

export default function LineChart() {
  const [stockChange, setStockChange] = useState<StockPriceChange[]>([])
  useEffect(() => {
    fetchStockPriceChanges().then((res) => setStockChange(res.data))
  }, [])
  const data = useMemo(
    () =>
      stockChange.map((stockChange) => ({
        month: stockChange.month,
        price: stockChange.price,
      })),
    [stockChange],
  )

  const props = {
    data,
    xField: 'month',
    yField: 'price',
  }

  return <Line {...props} />
}
