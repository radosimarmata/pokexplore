import { Pokemon } from '../types/pokemon'

type PokemonCardProps = {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{pokemon.name}</h3>
    </div>
  )
}

export default PokemonCard
