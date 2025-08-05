import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import './Home.css'

function Home() {
  const [count, setCount] = useState(3);
  const [showPlay, setShowPlay] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [countdownVisible, setCountdownVisible] = useState(true);

  useEffect(() => {
    if (count > 0) {
      setCountdownVisible(true);
      const timer = setTimeout(() => {
        setCountdownVisible(false);
        setTimeout(() => setCount(count - 1), 250);
      }, 800);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setCountdownVisible(false);
      setTimeout(() => setShowPlay(true), 400);
    }
  }, [count]);

  const handlePlay = () => {
    setFadeOut(true);
    setTimeout(() => setShowContent(true), 600);
  };

  return (
    <>
      <NavBar/>
      {(!showContent) && (
        <div className={`landing-overlay${fadeOut ? ' fade-out' : ''}`}>
          {showPlay ? (
            <button className='play-btn play-btn-animate' onClick={handlePlay}>PLAY</button>
          ) : (
            <div className={`countdown${countdownVisible ? ' fade-in' : ' fade-out'}`}>{count > 0 ? count : null}</div>
          )}
        </div>
      )}
      {showContent && (
        <div className='home-content'>
          {/* ...existing home page content here... */}
        </div>
      )}
    </>
  )
}

export default Home
