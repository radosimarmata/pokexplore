import { useParams, Link } from 'react-router-dom'
import useFetchPokemonDetailByName from '../hooks/useFetchPokemonDetailByName'
import clsx from 'clsx'
import pkball from '../assets/pkball.png'

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

  return typeColors[typeName] || 'bg-gray-100'
}

const PokemonDetail = () => {
  const { name } = useParams()
  const { data, isLoading, error } = useFetchPokemonDetailByName(name || '')

  if (isLoading) return <div className="text-white">Loading...</div>
  if (error) return <div className="text-red-500">Error: {error.message}</div>
  if (!data) return <div className="text-white">No data found</div>

  return (
    <div>
      <div className='flex justify-between items-center p-2 bg-gray-800 text-white rounded-lg shadow-lg'>
        <Link to="/" className="p-2 text-3xl font-bold">Pokémon List</Link>
        <Link to="/about" className="text-blue-500">About!</Link>
      </div>
      <div className='bg-gray-800 border-2 border-gray-200 p-4 rounded-xl shadow-lg text-center text-xs text-white mt-4'>
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="text-blue-500">Back to List</Link>
          <div className="flex-1 text-center">
            <h3 className="text-lg text-sky-200 font-semibold">
              #{String(data.id).padStart(4, '0')}
            </h3>
          </div>
          <div className="w-[110px]" />
        </div>

        <h1 className="text-3xl font-bold capitalize mb-2">{data.name}</h1>
        <div className="w-72 h-72 relative mx-auto rounded overflow-hidden flex justify-center items-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${pkball})` }}
          />
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
            className="w-lg h-lg z-10"
          />
        </div>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        <p>Type: </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {data.types.map(t => (
            <span key={t.type.name} className={clsx('px-3 py-1 rounded text-black font-semibold', getBackgroundClass(t.type.name))}>
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
