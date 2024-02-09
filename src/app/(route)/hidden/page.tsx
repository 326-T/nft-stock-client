'use client'

import DeleteSingleToken from './components/DeleteSingleToken'
import TokenTable from './components/TokenTable'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'
import { useContractRead } from '@thirdweb-dev/react'

export default function Page() {
  const { burn, contract, isReady } = useReverseRecruitContract()
  const { data, error } = useContractRead(contract, 'getAllTokens')

  const burnSigle = (id: string) => {
    if (!isReady) return
    burn(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  const burnMultiple = (ids: string[]) => {
    if (!isReady) return
    Promise.all(ids.map((id) => burnSigle(id)))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <div className='block p-10 justify-center items-center space-y-10'>
      <h1 className='text-4xl font-bold'>Delete Token</h1>
      <DeleteSingleToken onDeleteClick={burnSigle} />
      <TokenTable data={data || []} onDeleteClick={burnMultiple} />
    </div>
  )
}
