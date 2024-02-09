'use client'

import Input from '@/components/Input'
import { useState } from 'react'

export default function DeleteSingleToken({
  onDeleteClick,
}: {
  onDeleteClick: (id: string) => void
}) {
  const [token, setToken] = useState<string>('')

  return (
    <div className='flex space-x-5'>
      <Input type='number' value={token} setValue={setToken} />
      <button className='btn btn-red' onClick={() => onDeleteClick(token)}>
        Delete
      </button>
    </div>
  )
}
