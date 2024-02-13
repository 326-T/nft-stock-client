export default function Input({
  value,
  setValue,
  label,
  warn,
  type,
  step,
}: {
  value: string
  setValue: (value: string) => void
  label?: string
  warn?: string
  type?: string
  step?: string
}) {
  return (
    <label className='form-control'>
      {label && (
        <div className='label'>
          <span className='label-text'>{label}</span>
          <span className='label-text-alt text-red-400'>{warn}</span>
        </div>
      )}
      <input
        className='input input-bordered'
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type ? type : 'text'}
        step={step}
      />
    </label>
  )
}
