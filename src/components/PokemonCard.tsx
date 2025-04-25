import clsx from 'clsx'
import useFetchPokemonDetail from '../hooks/useFetchPokemonsDetail'
import { Pokemon } from '../types/pokemon'
import pkball from '../assets/pkball.png'

type Props = {
  pokemon: Pokemon
}

const getBackgroundClass = (typeName: string) => {
  const typeColors: { [key: string]: string } = {
    grass: 'bg-grass',
    fire: 'bg-fire',
    water: 'bg-water',
    electric: 'bg-electric',
    dark: 'bg-dark',
    dragon: 'bg-dragon',
    fairy: 'bg-fairy',
    flying: 'bg-flying',
    ghost: 'bg-ghost',
    ground: 'bg-ground',
    ice: 'bg-ice',
    normal: 'bg-normal',
    poison: 'bg-poison',
    psychic: 'bg-psychic',
    rock: 'bg-rock',
    bug: 'bg-bug',
    steel: 'bg-steel',
  }

  return typeColors[typeName] || 'bg-gray-100';
}

const PokemonCard = ({ pokemon }: Props) => {
  const { data, isLoading } = useFetchPokemonDetail(pokemon.url)

  if (isLoading) return <div>Loading {pokemon.name}...</div>
  if (!data) return <div>Failed to load {pokemon.name}</div>

  return (
    <div className="bg-gray-800 border-2 border-gray-200 p-4 rounded-xl shadow-lg text-center text-xs text-white hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-32 h-32 relative mx-auto rounded overflow-hidden flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${pkball})` }}
        />
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="w-24 h-24 z-10"
        />
      </div>
      <div className='border rounded-lg p-2 bg-gradient-to-r from-gray-700 via-slate-800 to-zinc-700'>
        <h3 className="text-base text-sky-200 font-bold">
          #{String(data.id).padStart(4, '0')}
        </h3>
        <h3 className="capitalize text-xl font-bold">{data.name}</h3>
        <div className='flex justify-center items-center space-x-2'>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
        <p>Base XP: {data.base_experience}</p>
        <div className="flex justify-center items-center flex-wrap">
          {data.types.map((t) => {
            const backgroundClass = getBackgroundClass(t.type.name)
            return (
              <div
                key={t.type.name}
                className={clsx(backgroundClass, 'text-white rounded-full px-4 m-1')}
              >
                <p className='capitalize'>{t.type.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
