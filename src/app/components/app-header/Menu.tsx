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
        <h3>探す</h3>
      </Link>
      <Link
        href='/dash-board'
        className='
          btn md:w-32
          title-small rounded-none
        '
      >
        <h3>確認</h3>
      </Link>
      <Link
        href='/exhibition'
        className='
          btn md:w-32
          title-small rounded-r-full
        '
      >
        <h3>出品</h3>
      </Link>
    </div>
  )
}
