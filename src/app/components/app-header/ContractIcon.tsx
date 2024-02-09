'use client'

import { Web3Context } from '@/contexts/Web3Context'
import { useContext } from 'react'
import { GrDocumentVerified } from 'react-icons/gr'
import { GrDocumentTime } from 'react-icons/gr'

export default function ContractIcon() {
  const { isReady } = useContext(Web3Context)

  return (
    <>
      {isReady ? (
        <GrDocumentVerified className='icon-small text-green-500' />
      ) : (
        <GrDocumentTime className='icon-small text-yellow-400' />
      )}
    </>
  )
}
