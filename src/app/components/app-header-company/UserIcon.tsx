import { ConnectWallet } from '@thirdweb-dev/react'
import { FaCircleUser } from 'react-icons/fa6'
import { IoMenu } from 'react-icons/io5'
import Link from 'next/link'

export default function UserIcon() {
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='btn rounded-full'>
        <div
          className='
            flex space-x-2
            items-centor
          '
        >
          <IoMenu className='icon-small' />
          <FaCircleUser className='icon-small' />
        </div>
      </div>
      <ul
        tabIndex={0}
        className='
          block
          dropdown-content
          z-20 p-5
          space-y-3
          shadow bg-base-100 rounded-box w-52
          body-medium
          overflow-scroll
        '
      >
        <li>
          <ConnectWallet />
        </li>
        <li>
          <Link href='/company/profile'>
            <button className='btn w-full'>プロフィール</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}
