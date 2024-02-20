import Image from 'next/image'
import { PiUserSquareDuotone } from 'react-icons/pi'

export default function PassportPhoto({
  url,
  onUpload,
}: {
  url?: string
  onUpload?: (file: File) => void
}) {
  return (
    <>
      <div className='flex w-full justify-center'>
        {url ? (
          <Image
            src={url}
            alt={''}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <PiUserSquareDuotone
            width={0}
            height={0}
            size='100vw'
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
      {onUpload && (
        <div className='flex justify-center'>
          <input type='file' className='file-input w-full max-w-xs' />
        </div>
      )}
    </>
  )
}
