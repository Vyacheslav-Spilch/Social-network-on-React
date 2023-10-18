import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'


const Navbar = (props) => {
    return (
    <nav className = {s.navigation} >
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/messages">Messanges</NavLink>
      </div>
      <div>
        
      </div>
      <div>
        <a href="">Music</a>
      </div>
      <div>
        <a href="">Setting</a>
      </div>
    </nav>
  )  
}

export default Navbar