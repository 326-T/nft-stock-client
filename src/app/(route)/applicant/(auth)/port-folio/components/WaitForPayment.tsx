export default function WaitForPayment() {
  return (
    <div
      className='
        flex items-end justify-end
        space-x-10
      '
    >
      <div className='w-fit p-2 rounded-lg border-2 border-primary-applicant'>
        <h1 className='title-medium text-primary-applicant'>支払い処理待ち</h1>
      </div>
    </div>
  )
}
