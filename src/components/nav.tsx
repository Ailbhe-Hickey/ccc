import React from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
  navBackgroundSticky?: string;
  navBackgroundDefault?: string;
};

const NavBar: React.FC<NavBarProps> = ({
  navBackgroundSticky = "bg-gradient-to-r from-[#3c5443] to-[#5d7767]",
  navBackgroundDefault = "bg-transparent",
}) => {
  const [isSticky] = React.useState(false); 
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isSticky ? navBackgroundSticky : navBackgroundSticky
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Logo and site name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/ccclogo.png"
            alt="Ballincollig Camogie Club Logo"
            className="h-20 w-auto"
          />
          <span className="text-3xl font-bold text-white">
            Ballincollig Camogie Club
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="space-x-8 hidden md:flex font-semibold text-white">
          <Link to="/social_media" className="hover:underline">
            News & Social Media
          </Link>
          <Link to="/membership" className="hover:underline">
            Memberships
          </Link>
          <Link to="/policies" className="hover:underline">
            Policies
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden pt-2 pb-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#3c5443] px-6 pb-4 pt-6 space-y-4 font-semibold text-white">
        
          <Link
            to="/social_media"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            News & Social Media
          </Link>

          <Link
            to="/membership"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Memberships
          </Link>

          <Link
            to="/policies"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Policies
          </Link>

          <Link
            to="/contact"
            className="block hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
};

export default NavBar;
