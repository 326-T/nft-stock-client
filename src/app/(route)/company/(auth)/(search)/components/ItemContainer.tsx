import { Resume } from '@/types/resume'
import ItemCard from './ItemCard'

export default function ItemContainer({ resumes }: { resumes: Resume[] }) {
  return (
    <ul className='flex flex-wrap space-x-2 space-y-2'>
      {resumes.map((resume) => (
        <li key={resume.uuid}>
          <ItemCard resume={resume} />
        </li>
      ))}
    </ul>
  )
}
