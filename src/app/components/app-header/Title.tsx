import { RiRestartFill } from 'react-icons/ri'

export default function Title({ company }: { company?: boolean }) {
  return (
    <div
      className='
        flex space-x-2
        items-center
      '
    >
      <RiRestartFill
        className={`icon-medium ${company ? 'text-primary-company' : 'text-primary-applicant'}`}
      />
      <div className='hidden lg:flex items-end'>
        <h1
          className={`title-large-emphasis ${company ? 'text-primary-company' : 'text-primary-applicant'}`}
        >
          R
        </h1>
        <h1 className='title-large'>everse-cruit</h1>
        {company && <h1 className='pl-3 title-large text-gray-500'>for company</h1>}
      </div>
    </div>
  )
}
