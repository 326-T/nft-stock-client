export default function TextArea({
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
      <textarea
        className='textaria textarea-bordered border-b-2'
        onChange={(e) => setValue(e.target.value)}
      >
        {value}
      </textarea>
    </label>
  )
}
