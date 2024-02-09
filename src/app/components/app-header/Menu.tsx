import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex items-center'>
      <Link
        href='/applicant'
        className='
          btn md:w-32
          title-small rounded-l-full
        '
      >
        <h3>応募</h3>
      </Link>
      <Link
        href='/applicant/port-folio'
        className='
          btn md:w-32
          title-small rounded-r-full
        '
      >
        <h3>確認</h3>
      </Link>
    </div>
  )
}
