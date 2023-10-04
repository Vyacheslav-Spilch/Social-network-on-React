import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
    <nav className = {s.navigation} >
      <div>
        Profile
      </div>
      <div>
       Messanger
      </div>
    </nav>
  )  
}

export default Navbar