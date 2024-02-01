import { FaCircleUser } from 'react-icons/fa6'
import { IoMenu } from 'react-icons/io5'

export default function UserIcon() {
  return (
    <button className='btn rounded-full'>
      <div
        className='
        flex space-x-2
        items-centor
      '
      >
        <IoMenu className='icon-small' />
        <FaCircleUser className='icon-small' />
      </div>
    </button>
  )
}
