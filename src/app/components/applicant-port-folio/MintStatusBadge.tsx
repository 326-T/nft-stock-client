export default function MintStatusBadge({ mintStatusId }: { mintStatusId: number }) {
  const mintStatus = [
    {
      text: '募集前',
      borderColor: 'border-yellow-400',
      textColor: 'text-yellow-400',
    },
    {
      text: '募集中',
      borderColor: 'border-green-500',
      textColor: 'text-green-500',
    },
    {
      text: '内定受諾',
      borderColor: 'border-gray-500',
      textColor: 'text-gray-500',
    },
  ]

  return (
    <div className='flex w-full py-5 justify-center items-center'>
      <div className={`w-fit p-5 rounded-lg border-2 ${mintStatus[mintStatusId].borderColor}`}>
        <h1 className={`title-large ${mintStatus[mintStatusId].textColor}`}>
          {mintStatus[mintStatusId].text}
        </h1>
      </div>
    </div>
  )
}
