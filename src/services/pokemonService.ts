import { PokemonResponse } from '../types/pokemon'

export const fetchPokemons = async (): Promise<PokemonResponse> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemons')
  }
  return response.json()
}
