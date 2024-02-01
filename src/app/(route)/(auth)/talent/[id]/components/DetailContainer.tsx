'use client'

import { fetchPokemon } from '@/services/pokeApi'
import { Pokemon, pokemonInit } from '@/types/pokemon'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function DetailContainer({ id }: { id: string }) {
  const [pokemon, setPokemon] = useState<Pokemon>(pokemonInit)
  useEffect(() => {
    fetchPokemon(id).then((res) => setPokemon(res.data))
  }, [])

  return (
    <div className='w-full-grid'>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={288} height={288} />
      <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={288} height={288} />
      <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={288} height={288} />
      <div className='min-w-72 p-5'>
        <div className='block w-fit body-large'>
          <p className='w-fit'>図鑑番号: {pokemon.id}</p>
          <p className='w-fit'>名前: {pokemon.name}</p>
          <p className='w-fit'>高さ: {pokemon.height}</p>
          <p className='w-fit'>重さ: {pokemon.weight}</p>
        </div>
      </div>
    </div>
  )
}
