export default function Tag({ text, company }: { text: string; company?: boolean }) {
  return (
    <div
      className='
        flex items-end justify-end
        space-x-10
      '
    >
      <div
        className={`
          w-fit p-2 rounded-lg border-2 
          ${company ? 'border-primary-company' : 'border-primary-applicant'}
        `}
      >
        <h1
          className={`
            title-medium
            ${company ? 'text-primary-company' : 'text-primary-applicant'}
          `}
        >
          {text}
        </h1>
      </div>
    </div>
  )
}
