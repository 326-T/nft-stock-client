import { PokemonSimple } from '@/types/pokemon'
import axios from 'axios'

export const fetchPokemons = async (limit: number, offset: number) => {
  const simpleList: PokemonSimple[] = await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.data.results)
  return Promise.all([
    ...simpleList.map(async (pokemon) => {
      return await axios.get(pokemon.url).then((res) => res.data)
    }),
  ])
}

export const fetchPokemon = async (id: string) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
