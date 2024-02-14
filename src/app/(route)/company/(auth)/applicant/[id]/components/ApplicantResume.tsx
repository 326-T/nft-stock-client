import TextArea from '@/components/TextArea'
import PassportPhoto from '@/components/entry-form/PassportPhoto'
import { Resume } from '@/types/resume'

export default function ApplicantResume({ resume }: { resume: Resume }) {
  return (
    <>
      {resume && (
        <div
          className='
            block md:flex
            justify-center w-full
            space-x-10
          '
        >
          <div
            className='
            w-full md:w-1/6
            space-y-5 md:space-y-10
          '
          >
            <PassportPhoto url={resume.picture} />
          </div>
          <div
            className='
            w-full md:w-3/4
            space-y-2
          '
          >
            <TextArea label='経歴' value={resume.education} setValue={() => {}} />
            <TextArea label='経験' value={resume.experience} setValue={() => {}} />
            <TextArea label='スキル・資格' value={resume.skills} setValue={() => {}} />
            <TextArea label='興味・関心' value={resume.interests} setValue={() => {}} />
            <TextArea label='参照URL' value={resume.urls} setValue={() => {}} />
          </div>
        </div>
      )}
    </>
  )
}
