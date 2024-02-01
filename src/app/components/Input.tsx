export default function Input({
  value,
  setValue,
  label,
}: {
  value: string
  setValue: (value: string) => void
  label?: string
}) {
  return (
    <label className='form-control'>
      {label && (
        <div className='label'>
          <span className='label-text'>{label}</span>
        </div>
      )}
      <input
        className='input input-bordered'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </label>
  )
}
