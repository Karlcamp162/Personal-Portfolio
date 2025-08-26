import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const cloudWidth = 300; // Adjust to match your cloud image width in px

// Reusable CloudMarquee component
const CloudMarquee = ({ top, height, duration, direction = 'right' }) => {
  // Determine initial and animate x values based on direction
  const initialX = direction === 'right' ? -cloudWidth : '100vw';
  const animateX = direction === 'right' ? '100vw' : -cloudWidth;
  return (
    <motion.img
      src="/cloud.png"
      alt="Moving Cloud"
      className={`fixed z-[-1] m-1 ${height}`}
      style={{ top, left: 0, position: 'fixed' }}
      initial={{ x: initialX }}
      animate={{ x: animateX }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration,
        ease: 'linear'
      }}
    />
  );
};

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [count, setCount] = useState(3);
  const [showPlay, setShowPlay] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if animation has been shown in this session
    const hasShownAnimation = sessionStorage.getItem('homeAnimationShown');
    
    if (!hasShownAnimation) {
      setShowAnimation(true);
      // Mark as shown for this session only
      sessionStorage.setItem('homeAnimationShown', 'true');
    } else {
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (!showAnimation) return;

    const countdown = setInterval(() => {
      setCount(prev => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(countdown);
          setShowPlay(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [showAnimation]);

  const handlePlay = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowAnimation(false);
      setShowContent(true);
    }, 500);
  };

  return (
    <>
      <NavBar />
      <img
        src="/road.png"
        className="fixed bottom-0 w-full object-cover z-[-1] h-[60px] sm:h-[80px] lg:h-[100px]"
        alt="road_img"
      />  

      {/* Landing Animation Overlay */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className={`fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 z-50 flex items-center justify-center ${fadeOut ? 'animate-fade-out' : ''}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              {!showPlay ? (
                <motion.div
                  key={count}
                  className="text-9xl sm:text-[12rem] lg:text-[15rem] font-bold text-yellow-300 font-pixel"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  {count}
                </motion.div>
              ) : (
                <motion.button
                  className="bg-yellow-300 text-purple-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-pixel px-12 py-6 rounded-2xl border-4 border-purple-700 hover:bg-yellow-200 hover:scale-110 transition-all duration-300 shadow-2xl"
                  onClick={handlePlay}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  START
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="flex flex-col items-center justify-center animate-fade-in px-4 sm:px-6 lg:px-8 mt-4 sm:mt-8 lg:mt-6 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
        <div className="text-center">
          <p className="text-5xl sm:text-7xl lg:text-9xl font-bold text-yellow-300 leading-tight">
            Welcome to My
          </p>
          <p className="text-5xl sm:text-7xl lg:text-9xl font-bold text-yellow-300 mb-4 sm:mb-6 lg:mb-8">
            World of Retro
          </p>
        </div>
        <p className="text-lg sm:text-xl lg:text-2xl text-white text-center">
          Explore my portfolio of retro-inspired design.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-white text-center mb-4 sm:mb-6 lg:mb-8">
          See details in Every Pixel!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xl px-4 mb-8">
          <Link
            to="/gallery"
            className="bg-purple-700 h-12 sm:h-14 lg:h-16 w-full sm:w-60 flex items-center justify-center text-white text-lg hover:bg-purple-400 hover:text-yellow-300 hover:scale-110 transition-all duration-300"
          >
            Browse Gallery
          </Link>

          <Link
            to="/profile"
            className="bg-cyan-500 h-12 sm:h-14 lg:h-16 w-full sm:w-60 flex items-center justify-center text-white text-lg hover:bg-purple-400 hover:text-yellow-300 hover:scale-110 transition-all duration-300"
          >
            See Profile
          </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee behavior="alternate" direction="right" scrollAmount="3" className="fixed bottom-[35px] sm:bottom-[45px] lg:bottom-[60px] z-[-1]">
        <img src="/mob.png" alt="Moving Mob" className="h-[30px] sm:h-[40px] lg:h-[50px] m-1"/>
      </marquee>

      {/* Cloud 1 - Top */}
      <CloudMarquee top="35px" height="h-[70px] sm:h-[90px] lg:h-[120px]" duration={48} direction="right" />
      {/* Cloud 2 - Middle */}
      <CloudMarquee top="35%" height="h-[90px] sm:h-[110px] lg:h-[140px]" duration={58} direction="right" />
      {/* Cloud 3 - Bottom */}
      <CloudMarquee top="65%" height="h-[80px] sm:h-[100px] lg:h-[130px]" duration={52} direction="left" />
    </>
  );
};

export default Home;