export interface Pokemon {
  id: number
  name: string
  sprites: {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }
  height: number
  weight: number
  stats: Stat[]
}

export interface PokemonSimple {
  name: string
  url: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}
export const pokemonInit = {
  id: 0,
  name: '',
  sprites: {
    back_default: '',
    back_female: '',
    back_shiny: '',
    back_shiny_female: '',
    front_default: '',
    front_female: '',
    front_shiny: '',
    front_shiny_female: '',
  },
  height: 0,
  weight: 0,
  stats: [],
}
