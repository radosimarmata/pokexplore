import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchPokemonsList from '../hooks/useFetchPokemonsList'
import PokemonCard from '../components/PokemonCard'
import Pagination from '../components/Pagination'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error } = useFetchPokemonsList(currentPage)
  const pokemonPerPage = 20

  const totalPages = data ? Math.ceil((data?.count || 0) / pokemonPerPage) : 0

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <div>Loading...</div>
  if (error instanceof Error) return <div>Error: {error.message}</div>

  return (
    <div>
      <div className='flex justify-between items-center p-2 bg-gray-800 text-white rounded-lg shadow-lg'>
        <h1 className="p-2 text-3xl font-bold">Pokémon List</h1>
        <Link to="/about" className="text-blue-500">About!</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2">
        {data?.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      
    </div>
  )
}

export default Home
