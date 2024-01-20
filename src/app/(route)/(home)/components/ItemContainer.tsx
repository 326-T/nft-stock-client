import { Pokemon } from '@/types/Pokemon'
import ItemCard from './ItemCard'

export default function ItemContainer({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <ul
      className='
        grid gap-5
        grid-cols-1 px-5
        sm:grid-cols-2
        lg:grid-cols-3 lg:px-16
        xl:grid-cols-4 
        2xl:grid-cols-5
      '
    >
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <ItemCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  )
}
