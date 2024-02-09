'use client'

import { ConnectWallet } from '@thirdweb-dev/react'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { IoMenu } from 'react-icons/io5'
import Link from 'next/link'

export default function UserIcon() {
  const authContext = useContext(AuthContext)

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
          dropdown-content
          z-[1] p-5
          space-y-3
          shadow bg-base-100 rounded-box w-52
          body-medium
          overflow-scroll
        '
      >
        <li>
          <Link href='/applicant/profile'>
            <p>プロフィール</p>
          </Link>
        </li>
        <li>
          <ConnectWallet />
        </li>
      </ul>
    </div>
  )
}
