import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex items-center'>
      <Link
        href='/'
        className='
          btn md:w-32
          title-small rounded-l-full
        '
      >
        <h3>貸す</h3>
      </Link>
      <Link
        href='/port-folio'
        className='
          btn md:w-32
          title-small rounded-none
        '
      >
        <h3>ユーザ情報</h3>
      </Link>
      <Link
        href='/apply-for'
        className='
          btn md:w-32
          title-small rounded-r-full
        '
      >
        <h3>応募</h3>
      </Link>
    </div>
  )
}
