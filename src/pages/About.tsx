import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-3xl mx-auto p-6 text-center space-y-6">
      <button
        onClick={() => navigate('/')}
        className="mb-4 text-sm text-sky-500 hover:underline text-left"
      >
        ← Back to Pokexplore
      </button>

      <h1 className="text-3xl font-bold text-sky-500">About Pokexplore</h1>
      <p className="text-gray-700 text-lg">
        <span className="font-semibold">Pokexplore</span> is a simple yet powerful web app that allows you to explore and learn about your favorite Pokémon.
        Dive into detailed stats, abilities, moves, and more — all presented in a clean and interactive interface.
      </p>

      <div className="text-left space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">✨ Features:</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Search for Pokémon by name or ID</li>
          <li>View base stats in colorful bar charts</li>
          <li>Explore abilities and move sets</li>
          <li>Responsive design for desktop and mobile</li>
        </ul>
      </div>

      <p className="text-sm text-gray-500">
        Built with ❤️ using React and TailwindCSS, powered by the{' '}
        <a
          href="https://pokeapi.co/"
          className="text-sky-400 underline hover:text-sky-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          PokéAPI
        </a>.
      </p>
    </div>
  )
}

export default About
