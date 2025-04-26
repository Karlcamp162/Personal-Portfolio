import { Link } from "react-router-dom"
import "./NavBar.css"

import React, { useState } from 'react'
import { MdOutlineGamepad } from "react-icons/md";

function NavBar() {
  const [isdrop, setDrop] = useState(false)


  return (
    <header>
        <h1>Portfolio</h1>
        <div className="DropDown">
        <button className="DropDownBtn" onClick= {() => setDrop(!isdrop)} ><MdOutlineGamepad className="btnIcon" alt="menu"/></button>

        {isdrop && (
        <div className="DropContent">
            <Link to={"/"}>Home</Link>
            <Link to={"/gallery"}>Gallery</Link>
            <Link to={"/contacts"}>Contacts</Link>
        </div>
        )}
        </div>

        <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/gallery"}>Gallery</Link>
            <Link to={"/contacts"}>Contacts</Link>
        </div>
        
        
    </header>
  )
}

export default NavBar