import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <h1>Social Sync</h1>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/profile/yourusername">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;


