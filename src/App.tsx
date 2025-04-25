import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PokemonDetail from './pages/PokemonDetail'

function App() {
  return (
    <div className='bg-gray-300 min-h-screen w-full p-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:name' element={<PokemonDetail />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
      
  )
}

export default App
