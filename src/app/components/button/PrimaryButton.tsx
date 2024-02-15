export default function PrimaryButton({
  onClick,
  label,
  disabled,
  company,
}: {
  onClick: () => void
  label: string
  disabled?: boolean
  company?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        btn min-w-24 rounded-lg
        text-white
        ${company ? 'bg-primary-company' : 'bg-primary-applicant'}
        ${company ? 'hover:bg-secondary-company' : 'hover:bg-secondary-applicant'}
      `}
    >
      <p className='title-small'>{label}</p>
    </button>
  )
}
