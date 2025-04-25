import useFetchPokemonDetail from '../hooks/useFetchPokemonsDetail'
import { Pokemon } from '../types/pokemon'
import pkball from '../assets/pokeball.png'

type Props = {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  const { data, isLoading } = useFetchPokemonDetail(pokemon.url)

  if (isLoading) return <div>Loading {pokemon.name}...</div>
  if (!data) return <div>Failed to load {pokemon.name}</div>

  return (
    <div className="border-2 border-gray-200 p-4 rounded shadow text-center text-xs">
      <img src={data.sprites.front_default} alt={data.name} className="w-24 h-24 mx-auto" />
      <h3 className="capitalize text-lg font-bold">{data.name}</h3>
      <div className='flex justify-center items-center space-x-2'>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
      </div>
      <p>Base XP: {data.base_experience}</p>
      <p>
        Type: {data.types.map((t) => t.type.name).join(', ')}
      </p>
    </div>
  )
}

export default PokemonCard
