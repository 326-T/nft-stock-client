export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
    back_default: string
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
