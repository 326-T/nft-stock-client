'use client'

import { AuthContext } from '@/contexts/AuthContext'
import { useContext } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { IoMenu } from 'react-icons/io5'

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
          <a>
            {authContext.applicant?.firstName} {authContext.applicant?.lastName}
          </a>
        </li>
        <li>
          <a>{authContext.applicant?.email}</a>
        </li>
        <li>
          <a>{authContext.applicant?.metamaskAddress}</a>
        </li>
      </ul>
    </div>
  )
}
