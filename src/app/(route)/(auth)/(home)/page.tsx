'use client'

import { useEffect, useMemo, useState } from 'react'
import ItemContainer from './components/ItemContainer'
import { Pokemon } from '@/types/pokemon'
import { fetchPokemons } from '@/services/pokeApi'

export default function HomePage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    fetchPokemons(30, 0).then((res) => setPokemons(res))
  }, [])

  const sorted = useMemo(() => {
    return pokemons
  }, [pokemons])

  return <ItemContainer pokemons={sorted} />
}
