import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const placeholderImages = [
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3',
  'https://via.placeholder.com/300x200?text=Image+4',
  'https://via.placeholder.com/300x200?text=Image+5',
  'https://via.placeholder.com/300x200?text=Image+6',
]

const projectPreview = [
  {
    img: placeholderImages[2],
    title: 'Portfolio Site',
    desc: 'My personal portfolio in pixel art style.'
  },
  {
    img: placeholderImages[1],
    title: 'Weather App',
    desc: 'Weather dashboardd.'
  },

  {
    img: placeholderImages[0],
    title: 'Pixel Platformer',
    desc: 'A retro platformer.'
  },
  {
    img: placeholderImages[3],
    title: 'Memory Puzzle',
    desc: 'PUzzzleesss.'
  }
]

const categories = [
  { key: 'projects', label: 'Projects' },
  { key: 'certificates', label: 'Certificates' },
  { key: 'others', label: 'Others' }
]

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [expanded, setExpanded] = useState({ projects: false, certificates: false, others: false })
  const [activeCategory, setActiveCategory] = useState('projects')

  const handleExpand = (cat) => {
    setExpanded(prev => ({ ...prev, [cat]: !prev[cat] }))
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-purple-900">
      <NavBar/>
      <div className='animate-fade-in'>
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4'>
          <h1 className='font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white text-center mb-8 text-yellow-300'>
            the Pixel Gallery
          </h1>
          <h2 className='font-pixel text-lg sm:text-xl md:text-2xl text-white text-center max-w-2xl mb-12'>
            Press start to Explore my Gallery of Projects and Achievements
          </h2>
          <ScrollLink
            to="wall"
            smooth={true}
            duration={500}
            offset={-20}
            className="bg-purple-500 hover:bg-purple-400 text-white text-lg sm:text-xl font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-lg hover:text-yellow-300 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Start
          </ScrollLink>
        </div>
      </div>
      <div
        id="wall"
        className="w-full min-h-[400px] flex flex-col items-center justify-center rounded-lg shadow-lg p-8"
        style={{
          backgroundImage: "url('/wall.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "48px 48px",
          imageRendering: "pixelated"
        }}
      >
        {/* Category buttons (top, scroll to section) */}
        <div className="w-full flex flex-row gap-3 mb-6 px-2 justify-center">
          {categories.map(cat => (
            <ScrollLink
              key={cat.key}
              to={cat.key}
              smooth={true}
              duration={500}
              offset={-40}
              className={`font-pixel px-4 py-2 rounded-lg font-bold text-sm transition-colors duration-200 border-2 border-purple-700 cursor-pointer select-none ${activeCategory === cat.key ? 'bg-yellow-300 text-purple-900' : 'bg-purple-800 text-yellow-300 hover:bg-purple-700'}`}
              onSetActive={() => setActiveCategory(cat.key)}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </ScrollLink>
          ))}
        </div>
        {/* Category Sections */}
        <div className="w-full flex flex-col gap-16">
          {/* Projects Section */}
          <ScrollElement name="projects">
            <div className="w-full flex flex-row items-center justify-between mb-8 px-2">
              <h2 className="font-pixel text-3xl sm:text-4xl font-bold text-white tracking-widest">PROJECTS</h2>
              <button
                className="font-pixel text-green-200 text-base sm:text-lg font-bold hover:text-yellow-300 transition-colors duration-200 tracking-wider"
                onClick={() => handleExpand('projects')}
              >
                {expanded.projects ? 'SEE LESS <' : 'SEE MORE >'}
              </button>
            </div>
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center"
            >
              <AnimatePresence initial={false}>
                {(expanded.projects ? projectPreview.concat([
                  { img: placeholderImages[4], title: 'Pixel Chat', desc: 'A chat app with pixel avatars.' },
                  { img: placeholderImages[5], title: 'Todo Quest', desc: 'Gamified todo list in pixel style.' }
                ]) : projectPreview).map((proj, idx) => (
                  <motion.div
                    key={proj.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, type: 'spring' }}
                    whileHover={{ scale: 1.07, zIndex: 2, boxShadow: '0 8px 32px 0 rgba(255,255,0,0.15)' }}
                    className="bg-[#2d0a52] rounded-2xl shadow-2xl w-full max-w-xs flex flex-col items-center border-4 border-purple-700 relative cursor-pointer"
                    style={{minHeight: '340px'}}
                  >
                    {/* Optional badge */}
                    {idx === 0 && !expanded.projects && (
                      <div className="font-pixel absolute top-4 right-4 bg-blue-200 text-xs font-bold text-black px-3 py-1 rounded-md shadow-md tracking-widest">NEW</div>
                    )}
                    {/* Project image */}
                    <div className="w-full flex justify-center mt-6 mb-4">
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-24 h-20 object-cover rounded-lg bg-[#1a0033] border-2 border-yellow-300 shadow-lg"
                        style={{ imageRendering: 'pixelated' }}
                        onClick={() => setSelectedImage(proj.img)}
                      />
                    </div>
                    {/* Title and rating */}
                    <div className="w-full px-4 flex flex-row items-center justify-between mb-2">
                      <div className="font-pixel text-white text-lg font-bold tracking-wider">{proj.title.toUpperCase()}</div>
                      <div className="flex flex-row items-center gap-1">
                        <span className="font-pixel text-yellow-300 text-base">★</span>
                        <span className="font-pixel text-white text-sm font-bold">{(4.5 + idx * 0.1).toFixed(1)}</span>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="w-full px-4 mb-8">
                      <p className="font-pixel text-white text-xs">{proj.desc}</p>
                    </div>
                    {/* Play now / action button */}
                    <div className="w-full flex flex-row items-center justify-between px-4 mb-6">
                      <div className="flex flex-row items-center gap-1">
                        <span className="font-pixel text-yellow-300 text-lg">◎</span>
                        <span className="font-pixel text-white text-sm font-bold">{1200 - idx * 100}</span>
                      </div>
                      <button
                        className="font-pixel bg-purple-400 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-purple-300 transition-colors duration-200"
                        onClick={() => setSelectedImage(proj.img)}
                      >
                        VIEW
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </ScrollElement>
          {/* Certificates Section */}
          <ScrollElement name="certificates">
            <div className="w-full flex flex-row items-center justify-between mb-8 px-2">
              <h2 className="font-pixel text-3xl sm:text-4xl font-bold text-white tracking-widest">CERTIFICATES</h2>
              <button
                className="font-pixel text-green-200 text-base sm:text-lg font-bold hover:text-yellow-300 transition-colors duration-200 tracking-wider"
                onClick={() => handleExpand('certificates')}
              >
                {expanded.certificates ? 'SEE LESS <' : 'SEE MORE >'}
              </button>
            </div>
            <div className="w-full flex flex-col items-center justify-center min-h-[200px] text-yellow-300 text-lg font-bold font-pixel">
              No certificates to show yet.
            </div>
          </ScrollElement>
          {/* Others Section */}
          <ScrollElement name="others">
            <div className="w-full flex flex-row items-center justify-between mb-8 px-2">
              <h2 className="font-pixel text-3xl sm:text-4xl font-bold text-white tracking-widest">OTHERS</h2>
              <button
                className="font-pixel text-green-200 text-base sm:text-lg font-bold hover:text-yellow-300 transition-colors duration-200 tracking-wider"
                onClick={() => handleExpand('others')}
              >
                {expanded.others ? 'SEE LESS <' : 'SEE MORE >'}
              </button>
            </div>
            <div className="w-full flex flex-col items-center justify-center min-h-[200px] text-yellow-300 text-lg font-bold font-pixel">
              No items in this category yet.
            </div>
          </ScrollElement>
        </div>
        {/* Modal for all project images */}
        {modalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-[#2d0a52] p-6 rounded-2xl flex flex-col items-center max-w-3xl w-full relative border-4 border-purple-700"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="font-pixel absolute top-2 right-4 text-white text-3xl font-bold hover:text-yellow-300"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>
              <h3 className="font-pixel text-yellow-300 text-xl font-bold mb-4">All Projects</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {placeholderImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Project ${idx+1}`}
                    className="rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 shadow-md border-2 border-yellow-300 font-pixel"
                    style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Full-size image modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-transparent p-4 rounded-lg flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="font-pixel self-end mb-2 text-white text-2xl font-bold hover:text-yellow-300"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Full size preview"
                className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl border-4 border-yellow-300"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery