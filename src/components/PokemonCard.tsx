import clsx from 'clsx'
import { Link } from 'react-router-dom'
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
    <Link to={`/pokemon/${data.name}`} className="bg-gray-800 border-2 border-gray-200 p-4 rounded-xl shadow-lg text-center text-xs text-white hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-32 h-32 relative mx-auto rounded overflow-hidden flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${pkball})` }}
        />
        <img
          src={data.sprites.other.showdown.front_default}
          alt={data.name}
          className="w-12 h-12 z-10"
        />
      </div>
      <h3 className="text-left text-sm text-sky-200 font-semibold">
        #{String(data.id).padStart(4, '0')}
      </h3>
      <div className='border rounded-lg p-2 bg-gradient-to-r from-gray-700 via-slate-800 to-zinc-700'>
        <h3 className="capitalize text-xl font-bold">{data.name}</h3>
        <div className='flex justify-center items-center space-x-2'>
          <p>Height: {data.height/10} m</p>
          <p>Weight: {data.weight/10} kg</p>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {data.types.map((t) => {
            const backgroundClass = getBackgroundClass(t.type.name)
            return (
              <div
                key={t.type.name}
                className={clsx(backgroundClass, 'text-white rounded-full px-4 m-1')}
              >
                <p className='capitalize text-black font-semibold'>{t.type.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard
