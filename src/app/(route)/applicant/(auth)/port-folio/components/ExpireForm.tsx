'use client'

import PrimaryButton from '@/components/button/PrimaryButton'
import { useReverseRecruitContract } from '@/hooks/useReverseRecruitContract'
import { expireResume } from '@/services/resumeApi'
import { UUID } from 'crypto'

export default function ExpireForm({ resumeUuid }: { resumeUuid: UUID }) {
  const { stopRecruitRights } = useReverseRecruitContract()

  const handleOffer = () => {
    stopRecruitRights(resumeUuid).then(() => expireResume(resumeUuid))
  }

  return (
    <div
      className='
        flex items-end justify-end
        space-x-10
      '
    >
      <PrimaryButton onClick={handleOffer} label='NFTの移動を停止する' />
    </div>
  )
}
