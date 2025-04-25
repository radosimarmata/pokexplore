import { useQuery } from '@tanstack/react-query'
import { PokemonDetail } from '../types/pokemon'

const fetchPokemonDetailByName = async (name: string): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch Pokémon: ${res.statusText}`)
  }
  return await res.json()
}

const useFetchPokemonDetailByName = (name: string) => {
  return useQuery({
    queryKey: ['pokemon-detail', name],
    queryFn: () => fetchPokemonDetailByName(name),
    enabled: !!name,
  })
}

export default useFetchPokemonDetailByName
