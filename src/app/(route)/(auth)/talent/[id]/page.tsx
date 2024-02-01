'use client'

import { useParams } from 'next/navigation'
import DetailContainer from './components/DetailContainer'
import ChartContainer from './components/ChartContainer'

export default function ItemPage() {
  const params = useParams<{ id: string }>()
  return (
    <div className='pt-5'>
      <ChartContainer />
      <div className='divider' />
      <DetailContainer id={params.id} />
    </div>
  )
}
