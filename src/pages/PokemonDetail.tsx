import { useState } from 'react'
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

const tabs = ['overview', 'stats', 'moves']

const PokemonDetail = () => {
  const { name } = useParams()
  const { data, isLoading, error } = useFetchPokemonDetailByName(name || '')
  const [activeTab, setActiveTab] = useState('overview')

  if (isLoading) return <div className="text-white">Loading...</div>
  if (error) return <div className="text-red-500">Error: {error.message}</div>
  if (!data) return <div className="text-white">No data found</div>

  return (
    <div>
      <div className='flex justify-between items-center p-2 bg-gray-800 text-white rounded-lg shadow-lg'>
        <Link to="/" className="p-2 text-3xl font-bold">Pokémon</Link>
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
        <div className="w-full bg-white text-black flex justify-center gap-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                'capitalize p-2',
                activeTab === tab
                  ? 'font-bold border-b-2 border-green-500'
                  : 'border-b-2 border-transparent hover:border-gray-400'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 text-sm text-left">
          {activeTab === 'overview' && (
            <div className='border-2 rounded-md border-gray-500 px-4 py-2'>
              <div className="flex flex-wrap gap-2 py-2">
                {data.types.map(t => (
                  <span key={t.type.name} className={clsx('capitalize px-3 py-1 rounded text-black font-semibold', getBackgroundClass(t.type.name))}>
                    {t.type.name}
                  </span>
                ))}
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <div>
                    <p className='text-sky-300'>Height</p>
                    <p>{data.height / 10} m</p>
                  </div>
                  <div>
                    <p className='text-sky-300'>Weight</p>
                    <p>{data.weight / 10} kg</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='text-sky-300'>Category</p>
                    <p className='capitalize'>{data.species.name}</p>
                  </div>
                  <div>
                    <p className='text-sky-300'>Base Experience</p>
                    <p>{data.base_experience}</p>
                  </div>
                  <div>
                    <p className='text-sky-300'>Ability</p>
                    <p className='capitalize'>
                      {data.abilities.map(a => a.ability.name).join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-4">
              {data.stats.map(stat => {
                const value = stat.base_stat
                const percent = (value / 255) * 100

                let colorClass = 'bg-red-500'
                if (value >= 64 && value <= 127) colorClass = 'bg-yellow-400'
                else if (value >= 128 && value <= 191) colorClass = 'bg-blue-500'
                else if (value >= 192) colorClass = 'bg-green-500'

                return (
                  <div key={stat.stat.name}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="capitalize">{stat.stat.name}</span>
                      <span>{value}</span>
                    </div>
                    <div className="w-full h-4 bg-gray-300 rounded">
                      <div
                        className={`h-full rounded ${colorClass}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === 'moves' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {data.moves.map(m => (
                <div key={m.move.name} className="border-b pb-2">
                  <p className="capitalize font-semibold text-sky-300">{m.move.name}</p>
                  <ul className="ml-4 list-disc text-sm">
                    {m.version_group_details.map((detail, idx) => (
                      <li key={idx}>
                        <span className="capitalize">{detail.move_learn_method.name}</span>
                        {detail.level_learned_at > 0 && ` at level ${detail.level_learned_at}`}
                        <span className="text-gray-400"> ({detail.version_group.name})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )} 

        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
