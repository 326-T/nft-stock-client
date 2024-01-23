import { GiChargingBull } from 'react-icons/gi'
import UserIcon from './UserIcon'
import Menu from './Menu'
import Link from 'next/link'

export default function AppHeader({}: {}) {
  return (
    <header
      className='
        flex w-full p-2 md:px-10
        items-center justify-between
        bg-white border-b border-gray-200
      '
    >
      <Link
        href='/'
        className='
          flex space-x-5
          items-center
        '
      >
        <GiChargingBull className='icon-large' />
        <h1 className='title-large hidden md:block'>NFT Stock</h1>
      </Link>
      <Menu />
      <UserIcon />
    </header>
  )
}
