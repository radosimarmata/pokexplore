import { Link } from 'react-router-dom'
import useFetchPokemons from '../hooks/useFetchPokemons'
import PokemonCard from '../components/PokemonCard'

const Home = () => {
  const { data, isLoading, error } = useFetchPokemons()

  if (isLoading) return <div>Loading...</div>
  if (error instanceof Error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1 className="p-2 text-3xl font-bold">Pokémon List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Link to="/about" className="text-blue-500">Go to About Page</Link>
    </div>
  )
}

export default Home
