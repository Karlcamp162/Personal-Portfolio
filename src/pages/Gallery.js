import React, { useState, useRef } from 'react'
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

const certificateImages = [
  { src: '/gallery/certificates/Cert-deploma.jpg', title: 'Diploma', desc: 'College diploma awarded upon completion of my degree program.', category: 'Certificate of Completion' },
  { src: '/gallery/certificates/cert-2nd-progSimulation.jpg', title: 'Programming Simulation', desc: '2nd place certificate from the programming simulation competition.', category: 'Certificate of Recognition' },
  { src: '/gallery/certificates/vice.png', title: 'Vice Mayor Award', desc: 'Awarded to Vice Mayor for outstanding student leadership.', category: 'Certificate of Appreciation' },
  { src: '/gallery/certificates/salesforce.png', title: 'Salesforce Internship', desc: 'Awarded by Smartbridge team from India for completing Salesforce Virtual Internship Program.', category: 'Certificate of Completion' },
  { src: '/gallery/certificates/EthicalHacking.png', title: 'Hacking Workshop', desc: 'Completion of the Ethical Hacking and Cybersecurity workshop.', category: 'Certificate of Participation' },
  { src: '/gallery/certificates/scratch.png', title: 'Scratch Programming', desc: 'Certificate for being the champion of the Scratch programming competition.', category: 'Certificate of Recognition' },
  { src: '/gallery/certificates/technofair.png', title: 'Technofair', desc: 'Awarded for organizing contestants in the Technofair event.', category: 'Certificate of Service' }, 
  { src: '/gallery/certificates/technofair2.png', title: 'Technofair 2.0', desc: 'Certificate for assisting in organizing the Technofair event.', category: 'Certificate of Service' },
  { src: '/gallery/certificates/chess.png', title: 'Chess Tournament', desc: 'Recognized for participation in the Intramurals chess competition.', category: 'Certificate of Participation' },
  { src: '/gallery/certificates/Acquiantance.png', title: 'Acquaintance Party', desc: 'Participation in the annual university acquaintance party.', category: 'Certificate of Participation' },
  { src: '/gallery/certificates/enrollment.png', title: 'Early Enrollment', desc: 'Recognition for early enrollment in the academic year.', category: 'Certificate of Recognition' },
  { src: '/gallery/certificates/TeachersDay.png', title: "Teacher's Day", desc: 'Given for helping organize Teacher’s Day appriciation event.', category: 'Certificate of Appreciation' },
  { src: '/gallery/certificates/funRun.png', title: 'Fun Run Participation', desc: 'Awarded as one of the organizers of the University fun run event.', category: 'Certificate of Service' },
];

// Portfolio project images (public paths)
const portfolioImages = [
  '/gallery/projects/portfolio/img1.png',
  '/gallery/projects/portfolio/img2.png',
  '/gallery/projects/portfolio/img3.png',
  '/gallery/projects/portfolio/img4.png',
  '/gallery/projects/portfolio/img5.png',
]

const cicImages = [
  '/gallery/projects/cic/cic1.png',
  '/gallery/projects/cic/cic2.png',
  '/gallery/projects/cic/cic3.png',
  '/gallery/projects/cic/cic4.png',
  '/gallery/projects/cic/cic5.png',
  '/gallery/projects/cic/cic6.png',
]

const todoAppImages = [
  '/gallery/projects/todo_app/todo_app1.png',
]

const treatmeImages = [
  '/gallery/projects/Treatme/treatme1.png',
  '/gallery/projects/Treatme/treatme2.png',
  '/gallery/projects/Treatme/treatme3.png',
  '/gallery/projects/Treatme/treatme4.png',
  '/gallery/projects/Treatme/treatme5.png',
  '/gallery/projects/Treatme/treatme6.png',
]

const wordpressResearchImages = [
  '/gallery/projects/wordpressResearch/research1.png',
  '/gallery/projects/wordpressResearch/research2.png',
  '/gallery/projects/wordpressResearch/research3.png',
  '/gallery/projects/wordpressResearch/research4.png',
  '/gallery/projects/wordpressResearch/research5.png',
]

const reactWallImages = [
  '/gallery/projects/react_wall/wall_screenshot.png',
]

const tictactoeImages = [
  '/gallery/projects/tictactoe/react_ttt.png',
]

const graduationImages = [
  '/gallery/others/grad1.jpg',
  '/gallery/others/grad2.jpg',
  '/gallery/others/profile.jpg',
]

const otherImages = [
  { src: graduationImages[0], title: 'Graduation', desc: 'Photos from my college graduation ceremony.', category: 'Graduation', images: graduationImages },
  { src: '/gallery/others/teamD.jpg', title: 'Team Destineer', desc: 'Team Destineer pitching an innovative project on technofair A.Y. 2024-2025.', category: 'Team Activity' },
  { src: '/gallery/others/pitching.jpg', title: 'Pitching Participation Award', desc: 'Awarded for participating in the pitching event.', category: 'Presentation' },
]

const projectPreview = [
  {
    img: portfolioImages[0],
    title: 'Portfolio Site',
    desc: 'My personal portfolio in pixel art style, showcasing my skills.',
    images: portfolioImages
  },
  {
    img: cicImages[0],
    title: 'Campos Internet Cafe',
    desc: 'A digitalized business platform helping people browse and discover available items and services.',
    images: cicImages
  },
  {
    img: todoAppImages[0],
    title: 'Todo App',
    desc: 'A simple and gamified todo list application.',
    images: todoAppImages
  },
  {
    img: treatmeImages[0],
    title: 'Treat Me',
    desc: 'A web application for a food business that allows customers to order food online.',
    images: treatmeImages
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

  // Slider state for specific project galleries
  const [sliderOpen, setSliderOpen] = useState(false)
  const [sliderImages, setSliderImages] = useState([])
  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderImagesRef = useRef([])

  const handleExpand = (cat) => {
    setExpanded(prev => ({ ...prev, [cat]: !prev[cat] }))
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
  }

  const openSlider = (images, startIndex = 0) => {
    sliderImagesRef.current = images
    setSliderImages(images)
    setSliderIndex(startIndex)
    setSliderOpen(true)
  }

  const closeSlider = () => {
    setSliderOpen(false)
    sliderImagesRef.current = []
    setSliderImages([])
    setSliderIndex(0)
  }

  const nextSlide = (e) => {
    e.stopPropagation()
    const length = sliderImagesRef.current.length
    if (length <= 1) return
    setSliderIndex((prev) => (prev + 1) % length)
  }

  const prevSlide = (e) => {
    e.stopPropagation()
    const length = sliderImagesRef.current.length
    if (length <= 1) return
    setSliderIndex((prev) => (prev - 1 + length) % length)
  }

  const handleProjectClick = (proj) => {
    if (proj.images && proj.images.length > 1) {
      openSlider(proj.images, 0)
    } else if (proj.img) {
      setSelectedImage(proj.img)
    }
  }

  const handleOtherClick = (item) => {
    if (item.images && item.images.length > 1) {
      openSlider(item.images, 0)
    } else {
      setSelectedImage(item.src)
    }
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
        className="w-full min-h[400px] flex flex-col items-center justify-center rounded-lg shadow-lg p-8"
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
                  { img: wordpressResearchImages[0], title: 'Internet Divide Research Website', desc: 'A WordPress-based research website exploring the digital divide and its impact on society.', images: wordpressResearchImages },
                  { img: reactWallImages[0], title: 'React Wall', desc: 'A React-based wall application with interactive features and modern UI design.', images: reactWallImages },
                  { img: tictactoeImages[0], title: 'React Tic Tac Toe', desc: 'A classic tic-tac-toe game built with React, featuring interactive gameplay and responsive design.', images: tictactoeImages }
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
                    <div className="w-full flex justify-center mt-6 mb-4 px-6">
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-full h-32 object-cover rounded-lg bg-[#1a0033] border-2 border-yellow-300 shadow-lg"
                        style={{ imageRendering: 'pixelated' }}
                        onClick={() => handleProjectClick(proj)}
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
                        onClick={() => handleProjectClick(proj)}
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
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center"
            >
              <AnimatePresence initial={false}>
                {(expanded.certificates ? certificateImages : certificateImages.slice(0, 4)).map((cert, idx) => (
                  <motion.div
                    key={cert.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, type: 'spring' }}
                    whileHover={{ scale: 1.07, zIndex: 2, boxShadow: '0 8px 32px 0 rgba(255,255,0,0.15)' }}
                    className="bg-[#2d0a52] rounded-2xl shadow-2xl w-full max-w-xs flex flex-col items-center border-4 border-purple-700 relative cursor-pointer"
                    style={{minHeight: '260px'}}
                  >
                    {/* Certificate image */}
                    <div className="w-full flex justify-center mt-6 mb-2 px-6">
                      <img
                        src={cert.src}
                        alt={cert.title}
                        className="w-full h-32 object-cover rounded-lg bg-[#1a0033] border-2 border-yellow-300 shadow-lg"
                        style={{ imageRendering: 'pixelated' }}
                        onClick={() => setSelectedImage(cert.src)}
                      />
                    </div>
                    {/* Subtitle (title) */}
                    <div className="w-full px-4 flex flex-row items-center justify-between mb-2">
                      <div className="font-pixel text-white text-lg font-bold tracking-wider">{cert.title}</div>
                    </div>
                    {/* View button */}
                    <div className="w-full flex flex-row items-center justify-between px-4 mb-2">
                      <span className="font-pixel text-purple-200 text-xs font-semibold bg-purple-900 bg-opacity-60 rounded px-2 py-1">{cert.category}</span>
                      <button
                        className="font-pixel bg-purple-400 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-purple-300 transition-colors duration-200"
                        onClick={() => setSelectedImage(cert.src)}
                      >
                        VIEW
                      </button>
                    </div>
                    {/* Description */}
                    <div className="w-full px-4 mb-2">
                      <div className="bg-purple-800 bg-opacity-80 rounded-lg px-3 py-2 mt-1 shadow-inner">
                        <p className="font-pixel text-yellow-200 text-xs text-left">{cert.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
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
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center"
            >
              <AnimatePresence initial={false}>
                {(expanded.others ? otherImages : otherImages.slice(0, 4)).map((item, idx) => (
                  <motion.div
                    key={item.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, type: 'spring' }}
                    whileHover={{ scale: 1.07, zIndex: 2, boxShadow: '0 8px 32px 0 rgba(255,255,0,0.15)' }}
                    className="bg-[#2d0a52] rounded-2xl shadow-2xl w-full max-w-xs flex flex-col items-center border-4 border-purple-700 relative cursor-pointer"
                    style={{minHeight: '260px'}}
                  >
                    {idx === 0 && !expanded.others && (
                      <div className="font-pixel absolute top-4 right-4 bg-blue-200 text-xs font-bold text-black px-3 py-1 rounded-md shadow-md tracking-widest">NEW</div>
                    )}
                    {/* Item image */}
                    <div className="w-full flex justify-center mt-6 mb-2 px-6">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-lg bg-[#1a0033] border-2 border-yellow-300 shadow-lg"
                        style={{ imageRendering: 'pixelated' }}
                        onClick={() => handleOtherClick(item)}
                      />
                    </div>
                    {/* Subtitle (title) */}
                    <div className="w-full px-4 flex flex-row items-center justify-between mb-2">
                      <div className="font-pixel text-white text-lg font-bold tracking-wider">{item.title}</div>
                    </div>
                    {/* View button */}
                    <div className="w-full flex flex-row items-center justify-between px-4 mb-2">
                      <span className="font-pixel text-purple-200 text-xs font-semibold bg-purple-900 bg-opacity-60 rounded px-2 py-1">{item.category}</span>
                      <button
                        className="font-pixel bg-purple-400 text-white text-xs font-bold px-4 py-2 rounded-md hover:bg-purple-300 transition-colors duration-200"
                        onClick={() => handleOtherClick(item)}
                      >
                        VIEW
                      </button>
                    </div>
                    {/* Description */}
                    <div className="w-full px-4 mb-2">
                      <div className="bg-purple-800 bg-opacity-80 rounded-lg px-3 py-2 mt-1 shadow-inner">
                        <p className="font-pixel text-yellow-200 text-xs text-left">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </ScrollElement>
        </div>
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
      {/* image modal */}
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
      {/* Slider modal */}
      {sliderOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeSlider}
        >
          <div
            className="relative flex flex-row items-center justify-center gap-2 sm:gap-4 max-w-[96vw] max-h-[90vh] p-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="font-pixel shrink-0 text-yellow-300 text-3xl md:text-5xl font-bold hover:text-white px-2"
              onClick={prevSlide}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="relative flex flex-col items-center justify-center min-w-0">
              <button
                type="button"
                className="font-pixel absolute -top-2 right-0 text-white text-3xl font-bold hover:text-yellow-300 z-10"
                onClick={(e) => { e.stopPropagation(); closeSlider() }}
                aria-label="Close slider"
              >
                ×
              </button>
              <img
                key={sliderImages[sliderIndex]}
                src={sliderImages[sliderIndex]}
                alt={`Slide ${sliderIndex + 1}`}
                className="rounded-lg shadow-2xl border-4 border-purple-600 max-w-[80vw] max-h-[74vh] object-contain bg-[#1a0033]/40"
              />
              <div className="mt-3 flex items-center justify-center gap-2">
                {sliderImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`w-2.5 h-2.5 rounded-full ${i === sliderIndex ? 'bg-yellow-300' : 'bg-purple-600'}`}
                    onClick={(e) => { e.stopPropagation(); setSliderIndex(i) }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <button
              type="button"
              className="font-pixel shrink-0 text-yellow-300 text-3xl md:text-5xl font-bold hover:text-white px-2"
              onClick={nextSlide}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery