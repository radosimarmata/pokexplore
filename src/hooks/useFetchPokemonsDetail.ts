import { useQuery } from '@tanstack/react-query'
import { PokemonDetail } from '../types/pokemon'

const useFetchPokemonDetail = (url: string) => {
  return useQuery<PokemonDetail>({
    queryKey: ['pokemon-detail', url],
    queryFn: async () => {
      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to fetch Pokémon detail')
      return res.json()
    },
    enabled: !!url,
  })
}

export default useFetchPokemonDetail
