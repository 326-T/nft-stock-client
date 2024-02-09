'use client'

import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'
import { useContractRead } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'

export default function TokenTable() {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const { burn, contract } = useReverseRecruitContract()
  const { data, error } = useContractRead(contract, 'getAllTokens')

  const burnSigle = (id: string) => {
    burn(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  const burnMultiple = () => {
    Promise.all(data.map((id: string) => burnSigle(id)))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <>
      {data && (
        <div className='block'>
          <button className='btn btn-red' onClick={burnMultiple}>
            Delete
          </button>

          <table className='table table-zebra'>
            <thead>
              <tr>
                <input
                  type='checkbox'
                  checked={selectedIds.length === data.length}
                  onChange={(e) => {}}
                />
                <th>Token</th>
              </tr>
            </thead>
            <tbody>
              {data.map((token: string, index: number) => (
                <tr key={token}>
                  <td>
                    <input
                      type='checkbox'
                      checked={selectedIds.includes(index)}
                      onChange={(e) => {}}
                    />
                  </td>
                  <td>{token}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
