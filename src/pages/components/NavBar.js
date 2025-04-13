import { Link } from "react-router-dom"
import "./NavBar.css"

import React from 'react'

function NavBar() {
  return (
    <header>
        <h1>Portfolio</h1>
        
        <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/project"}>Projects</Link>
            <Link to={"/gallery"}>Gallery</Link>
        </div>
        
    </header>
  )
}

export default NavBar