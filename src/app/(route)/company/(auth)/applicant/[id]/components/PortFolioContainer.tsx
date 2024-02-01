import ResponsiveContainer from '@/components/ResponsiveContainer'
import LineChart from './LineChart'

export default function PortFolioContainer() {
  const data = [
    {
      name: 'みずほ銀行',
      price: 3200000,
      message: '採用権を買わせてください。',
    },
    {
      name: 'みずほキャピタル',
      price: 3100000,
      message: 'よろしくお願いします。',
    },
    {
      name: 'ワイモバイル',
      price: 3005000,
      message: '弊社で働きませんか？',
    },
    {
      name: 'ソフトバンクテクノロジー',
      price: 3001000,
      message: 'テクノロジーに興味ありませんか？',
    },
    {
      name: 'LINEヤフー株式会社',
      price: 3000100,
      message: 'LINEヤフー株式会社に参加しませんか？',
    },
  ]

  return (
    <ResponsiveContainer>
      <div className='block md:flex space-y-10'>
        <div className='block w-full md:w-1/2 space-y-10'>
          <LineChart />
          <div className='flex justify-end w-full'>
            <h2 className='w-full py-5 text-end title-large border-b-2'>ソフトバンク株式会社</h2>
          </div>
          <div className='flex justify-end w-full'>
            <h2 className='w-full py-5 text-end title-large border-b-2'>3,000,000円</h2>
          </div>
        </div>
        <div className='flex w-full md:w-1/2 px-5 md:px-10 align-bottom'>
          <ul className='block w-full p-5 space-y-5 bg-blue-100 rounded-lg'>
            {data.map((item, index) => (
              <li
                key={index}
                className='
                  flex justify-between w-full py-5 px-5 space-x-3 bg-white rounded-lg
                '
              >
                <h2 className='body-medium w-1/3'>{item.name}</h2>
                <h2 className='body-medium w-1/3'>{item.price}</h2>
                <h2 className='body-medium w-1/3'>{item.message}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ResponsiveContainer>
  )
}
