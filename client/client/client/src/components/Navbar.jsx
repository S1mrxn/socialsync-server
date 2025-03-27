import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-primary border-b border-gray-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-secondary font-[Pacifico]">
          SocialSync
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-secondary transition">Home</Link>
          {isLoggedIn && (
            <>
              <Link to="/feed" className="hover:text-secondary transition">Feed</Link>
              <Link to="/profile/yourusername" className="hover:text-secondary transition">Profile</Link>
              <button
                onClick={handleLogout}
                className="hover:text-secondary transition"
              >
                Logout
              </button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/login" className="hover:text-secondary transition">Login</Link>
              <Link to="/signup" className="hover:text-secondary transition">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
