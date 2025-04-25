import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../services/pokemonService'
import { PokemonResponse } from '../types/pokemon'

const useFetchPokemonsList = () => {
  return useQuery<PokemonResponse, Error>({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
  })
}

export default useFetchPokemonsList
