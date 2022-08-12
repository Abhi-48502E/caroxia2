import React from 'react'
import { Outlet, Link } from "react-router-dom";
import SearchBar from '../Search/SearchBar';
import './navbar.css'

function Navbar() {
  return (
    <div className="main_nav">
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  <Link to="/signup"><a>Sign-up</a></Link>
  <Link to="/about"><a>About</a></Link>
  <Link to="/contacts"><a>Contact-us</a></Link>
  </div>
</div>
<Outlet />

</div>

  )
}

export default Navbar