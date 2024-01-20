import Image from 'next/image'
import Link from 'next/link'
import { Pokemon } from '@/types/pokemon'

export default function ItemCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link
      href={`/items/${pokemon.id}`}
      className='
        block
        w-full
      '
    >
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={400} height={400} />
      <div className='block'>
        <p>図鑑番号: {pokemon.id}</p>
        <p>名前: {pokemon.name}</p>
        <p>高さ: {pokemon.height}</p>
        <p>重さ: {pokemon.weight}</p>
      </div>
    </Link>
  )
}