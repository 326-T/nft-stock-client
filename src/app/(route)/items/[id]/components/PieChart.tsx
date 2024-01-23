'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Pie } from '@ant-design/charts'
import { Stockholding } from '@/types/stock'
import { fetchStockholdings } from '@/services/stockApi'

export default function PieChart() {
  const [stockholdings, setStockholdings] = useState<Stockholding[]>([])
  useEffect(() => {
    fetchStockholdings().then((res) => setStockholdings(res.data))
  }, [])
  const data = useMemo(
    () =>
      stockholdings.map((stockholding) => ({
        name: stockholding.name,
        quantity: stockholding.quantity,
      })),
    [stockholdings],
  )

  const config = {
    appendPadding: 10,
    data,
    angleField: 'quantity',
    colorField: 'name',
    radius: 1,
    innerRadius: 0.6,

    interactions: [{ type: 'element-active' }],
  }

  return <Pie {...config} />
}
