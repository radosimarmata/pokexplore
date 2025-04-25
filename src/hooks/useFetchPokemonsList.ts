import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../services/pokemonService'
import { PokemonResponse } from '../types/pokemon'

const useFetchPokemonsList = (page: number) => {
  return useQuery<PokemonResponse, Error>({
    queryKey: ['pokemons', page],
    queryFn: () => fetchPokemons(page)
  })
}

export default useFetchPokemonsList
