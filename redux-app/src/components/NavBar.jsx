import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import banner from '../img/Cat-Banner.jpg';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-banner">
        <Link to="/"><img src={banner} alt="Catpedia site banner" /></Link>
      </div>
      <div className="nav-items">
        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        <NavLink to="/breeds" activeClassName="selected">Breeds</NavLink>
        <NavLink to="/categories" activeClassName="selected">Categories</NavLink>
        <NavLink to="/favorites" activeClassName="selected">Favorites</NavLink>
        <NavLink to="/randomkitty" activeClassName="selected">Random Kitty</NavLink>
      </div>
    </div>
  )
}

export default NavBar
