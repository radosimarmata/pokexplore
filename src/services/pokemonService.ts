import { PokemonResponse } from '../types/pokemon'

export const fetchPokemons = async (page: number): Promise<PokemonResponse> => {
  const pokemonPerPage = 20
  const offset = (page - 1) * pokemonPerPage
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pokemonPerPage}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemons')
  }

  return response.json()
}
