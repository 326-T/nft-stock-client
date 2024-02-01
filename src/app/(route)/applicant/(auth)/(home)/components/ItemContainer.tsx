import { Pokemon } from '@/types/pokemon'
import ItemCard from './ItemCard'

export default function ItemContainer({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <ul className='w-full-grid'>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <ItemCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  )
}
