'use client'

import { expireResume } from '@/services/resumeApi'
import { UUID } from 'crypto'

export default function ExpireForm({ resumeUuid }: { resumeUuid: UUID }) {
  const handleOffer = () => {
    expireResume(resumeUuid)
  }

  return (
    <div
      className='
        flex items-end justify-end
        space-x-10
      '
    >
      <button
        onClick={handleOffer}
        className='
          btn rounded-full
        '
      >
        <p className='title-small'>NFTの移動を停止する</p>
      </button>
    </div>
  )
}
