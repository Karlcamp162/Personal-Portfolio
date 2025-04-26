import React from 'react'
import NavBar from './components/NavBar';
import "./Home.css";
import { FaPython, FaJava  } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { SiLua, SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <NavBar/>
      <div className='container'>
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
            <div className='class'>
              <div className='class_row1'>
                  <img src='/health.png' alt='Health icon' className='healthIcon'/><h3>HP</h3> <img src='/healthBar.png' alt='HealthBar icon' className='healthBarIcon'/> 
              </div>
              <div className='class_row2'>
              <img src='/mana.png' alt='Mana icon' className='manaIcon'/> <h3>MP</h3> <img src='/manaBar.png' alt='ManaBar icon' className='manaBarIcon'/>
              </div>
            </div>
        </div>
        <div className='languages'>
          <h2>Programming Languages</h2>
          <div className='lang'>
              <FaPython size={30}/><p>Python</p>
          </div>
          <div className='lang'>
              <FaJava size={30}/><p>Java</p>
          </div>
          <div className='lang'>
              <DiRuby size={30}/><p>Ruby</p>
          </div>
          <div className='lang'>
              <TbBrandCpp size={30}/><p>c++</p>
          </div>
          <div className='lang'>
              <SiLua size={30}/><p>LUA</p>
          </div>
          <div className='lang'>
              <SiPhp size={30}/><p>PHP</p>
          </div>
          <div className='lang'>
              <IoLogoJavascript size={30}/><p>JavaScript</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;