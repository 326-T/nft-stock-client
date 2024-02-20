'use client'

import Menu from './Menu'
import Link from 'next/link'
import UserIcon from './UserIcon'
import ContractIcon from './ContractIcon'
import Title from './Title'

export default function AppHeader({ disableMenu }: { disableMenu?: boolean }) {
  return (
    <header
      className={`
        flex w-full p-2 md:px-10
        items-center ${disableMenu ? 'justify-center' : 'justify-between'}
        bg-white border-b border-gray-200
      `}
    >
      <Link href='/applicant'>
        <Title />
      </Link>
      {disableMenu || (
        <>
          <Menu />
          <div className='flex justify-center items-center space-x-5'>
            <ContractIcon />
            <UserIcon />
          </div>
        </>
      )}
    </header>
  )
}
