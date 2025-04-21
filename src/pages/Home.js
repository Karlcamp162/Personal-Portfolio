import React from 'react'
import NavBar from './components/NavBar';
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar/>
      <container>
        <div className='title'>
          <h1>Character Information</h1>
        </div>
        <div className='profile'>
            <img src='/character_scratch.png' alt='Profile pic' className='profile_pic'/>
            <div className='class'>
              <div className='class_row1'>
                <h3>Name:</h3> <p>Karl Louise M. Campos </p>
                
              </div>
              <div className='class_row2'>
              <h3>Course: </h3><p>BS-Computer Science</p>
              </div>
            </div>
            <div className='class'>
              <div className='class_row1'>
                  <h3>Lvl:</h3> <p>3rd yr. College Student</p>
              </div>
              <div className='class_row2'>
                  <h3>Age:</h3> <p>21</p>
              </div>
            </div>
            
        </div>
      </container>
    </>
  )
}

export default Home;