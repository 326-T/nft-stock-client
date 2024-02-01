import { Resume } from '@/types/resume'
import ItemCard from './ItemCard'

export default function ItemContainer({ resumes }: { resumes: Resume[] }) {
  return (
    <ul className='flex flex-wrap'>
      {resumes.map((resume) => (
        <li key={resume.uuid}>
          <ItemCard resume={resume} />
        </li>
      ))}
    </ul>
  )
}
