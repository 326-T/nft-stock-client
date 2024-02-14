export default function MintStatusBadge({ mintStatusId }: { mintStatusId: number }) {
  const mintStatus = ['募集前', '募集中', '内定受諾']

  return (
    <div className='flex w-full p-5 justify-end items-center'>
      <div className='w-fit p-5 rounded-lg border-2 border-blue-500'>
        <h1 className='title-large text-blue-500'>{mintStatus[mintStatusId]}</h1>
      </div>
    </div>
  )
}
