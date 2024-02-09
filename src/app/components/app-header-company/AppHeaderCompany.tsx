'use client'

import { ConnectWallet } from '@thirdweb-dev/react'
import { FaUndoAlt } from 'react-icons/fa'
import MenuCompany from './MenuCompany'
import Link from 'next/link'

export default function AppHeaderCompany({ disableMenu }: { disableMenu?: boolean }) {
  return (
    <header
      className={`
        flex w-full p-2 md:px-10
        items-center ${disableMenu ? 'justify-center' : 'justify-between'}
        bg-white border-b border-gray-200
      `}
    >
      <Link
        href='/company'
        className='
          flex space-x-5
          items-center
        '
      >
        <FaUndoAlt className='icon-large' />
        <h1 className='title-large hidden md:block'>Reverse Cruit for Company</h1>
      </Link>
      {disableMenu || <MenuCompany />}
      <ConnectWallet />
    </header>
  )
}
