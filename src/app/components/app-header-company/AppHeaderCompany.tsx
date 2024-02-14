'use client'

import MenuCompany from './MenuCompany'
import Link from 'next/link'
import UserIcon from './UserIcon'
import ContractIcon from '../app-header/ContractIcon'
import Title from '../app-header/Title'

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
        <Title company />
      </Link>
      {disableMenu || (
        <>
          <MenuCompany />
          <div className='flex justify-center items-center space-x-5'>
            <ContractIcon />
            <UserIcon />
          </div>
        </>
      )}
    </header>
  )
}
