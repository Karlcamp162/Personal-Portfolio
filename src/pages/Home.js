import React from 'react';
import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <NavBar />
      <img
        src="/road.png"
        className="fixed bottom-0 w-full object-cover z-[-1] h-[60px] sm:h-[80px] lg:h-[100px]"
        alt="road_img"
      />

      <div className="flex flex-col items-center justify-center animate-fade-in px-4 sm:px-6 lg:px-8 mt-4 sm:mt-8 lg:mt-6 mb-20">
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
      </div>

      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee behavior="alternate" direction="right" scrollAmount="8" className="fixed bottom-[35px] sm:bottom-[45px] lg:bottom-[60px] z-[-1]">
        <img src="/mob.png" alt="Moving Mob" className="h-[30px] sm:h-[40px] lg:h-[50px] m-1"/>
      </marquee>
    </>
  );
};

export default Home;
