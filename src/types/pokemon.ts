export interface PokemonResponse {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetail {
  id: number
  name: string
  is_default: boolean
  location_area_encounters: string
  order: number
  height: number
  weight: number
  base_experience: number
  sprites: {
    front_default: string
    front_shiny: string
    front_female: string | null
    back_default: string
    back_shiny: string
    back_female: string | null
    other: {
      dream_world: {
        front_default: string
        front_female: string | null
      }
      home: {
        front_default: string
        front_female: string | null
        front_shiny: string
        front_shiny_female: string | null
      }
      'official-artwork': {
        front_default: string
        front_shiny: string
      }
      showdown: {
        front_default: string
        front_female: string | null
        front_shiny: string
        front_shiny_female: string | null
        back_default: string
        back_female: string | null
        back_shiny: string
        back_shiny_female: string | null
      }
    }[]
  }
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
}

