import { Resume } from '@/types/resume'
import Image from 'next/image'
import Link from 'next/link'
import { PiUserSquareDuotone } from 'react-icons/pi'
export default function ItemCard({ resume }: { resume: Resume }) {
  return (
    <Link href={`/company/applicant/${resume.uuid}`}>
      <div
        className='
        block
        w-96 h-96
        p-2
      '
      >
        <div className='flex w-full h-1/2 justify-center'>
          {resume.picture ? (
            <Image
              src={resume.picture}
              alt={''}
              width={0}
              height={0}
              sizes='200'
              style={{ width: 'auto', height: '100%' }}
            />
          ) : (
            <PiUserSquareDuotone
              width={0}
              height={0}
              size='200'
              style={{ width: 'auto', height: '100%' }}
            />
          )}
        </div>
        <div className='h-1/2'>
          <div className='grid grid-cols-5 px-5 body-medium'>
            <p className=' col-span-1'>経歴</p>
            <p className=' col-span-4'>{resume.education}</p>
            <p className=' col-span-1'>スキル</p>
            <p className=' col-span-4'>{resume.skills}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
