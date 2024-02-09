import Link from 'next/link'

export default function MenuCompany() {
  return (
    <div className='flex items-center'>
      <Link
        href='/company'
        className='
          btn md:w-32
          title-small rounded-l-full
        '
      >
        <h3>企業情報</h3>
      </Link>
      <Link
        href='/company/search'
        className='
          btn md:w-32
          title-small rounded-none
        '
      >
        <h3>探す</h3>
      </Link>
      <Link
        href='/company/port-folio'
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
