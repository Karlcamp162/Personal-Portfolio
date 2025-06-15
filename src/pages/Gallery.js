import React from 'react'
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-purple-900">
      <NavBar/>
      <div className='animate-fade-in'>
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white text-center mb-8 text-yellow-300'>
            the Pixel Gallery
          </h1>
          <h2 className='text-lg sm:text-xl md:text-2xl text-white text-center max-w-2xl mb-12'>
            Press start to Explore my Gallery of Projects and Achievements
          </h2>
          <Link
            to="#"
            className="bg-purple-500 hover:bg-purple-400 text-white text-lg sm:text-xl font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-lg hover:text-yellow-300 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start
          </Link>
        </div>
        <div>

        </div>



      </div>
    </div>
  )
}

export default Gallery