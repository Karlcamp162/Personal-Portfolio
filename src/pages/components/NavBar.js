import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"

import React, { useState } from 'react'
import { MdOutlineGamepad } from "react-icons/md";

function NavBar() {
  const [isdrop, setDrop] = useState(false)
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <header>
        <Link to={"/"}><h1>Portfolio</h1></Link>
        <div className="DropDown">
        <button className="DropDownBtn" onClick= {() => setDrop(!isdrop)} ><MdOutlineGamepad className="btnIcon" alt="menu"/></button>

        {isdrop && (
        <div className="DropContent">
            <Link to={"/"} className={isActive("/") ? "active" : ""}>Home</Link>
            <Link to={"/gallery"} className={isActive("/gallery") ? "active" : ""}>Gallery</Link>
            <Link to={"/profile"} className={isActive("/profile") ? "active" : ""}>Profile</Link>
            <Link to={"/contacts"} className={isActive("/contacts") ? "active" : ""}>Contacts</Link>
        </div>
        )}
        </div>

        <div className="links">
            <Link to={"/"} className={isActive("/") ? "active" : ""}>
              <span>Home</span>
            </Link>
            <Link to={"/gallery"} className={isActive("/gallery") ? "active" : ""}>
              <span>Gallery</span>
            </Link>
            <Link to={"/profile"} className={isActive("/profile") ? "active" : ""}>
              <span>Profile</span>
            </Link>
            <Link to={"/contacts"} className={isActive("/contacts") ? "active" : ""}>
              <span>Contacts</span>
            </Link>
        </div>
    </header>
  )
}

export default NavBar