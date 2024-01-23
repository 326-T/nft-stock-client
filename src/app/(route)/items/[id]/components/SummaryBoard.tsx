export default function SummaryBoard() {
  return (
    <div
      className='
        grid justify-items-center
        space-y-10
        py-10 lg:py-16
        border-2 rounded-lg
      '
    >
      <div className='justify-items-start space-y-10'>
        <div className='flex space-x-10'>
          <div>
            <p className='body-large'>現在順位</p>
            <p className='title-large'>3</p>
          </div>
          <div>
            <p className='body-large'>保有数量</p>
            <p className='title-large'>40</p>
          </div>
        </div>
        <div>
          <p className='body-large'>評価損益額</p>
          <p className='title-large'>+22,680</p>
        </div>
      </div>
      <div
        className='
          fixed bottom-0 md:static
          grid items-center justify-items-center
          w-full
        '
      >
        <div className='flex w-full sm:w-fit'>
          <button
            className='
            btn
            w-1/2 md:w-32
            title-small
            rounded-none md:rounded-l-full
          '
          >
            買う
          </button>
          <button
            className='
            btn
            w-1/2 md:w-32
            title-small
            rounded-none md:rounded-r-full
          '
          >
            売る
          </button>
        </div>
      </div>
    </div>
  )
}
