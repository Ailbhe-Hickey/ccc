import React from "react";
import { Link } from "react-router-dom";

type HeroWithNavProps = {
  title?: React.ReactNode;
  subtitle?: string;
  imageSrc?: string;
  buttonText?: string;
  buttonLink?: string;
  navBackgroundSticky?: string;
  navBackgroundDefault?: string;
};

const HeroWithNav: React.FC<HeroWithNavProps> = ({
  title = "Welcome to the home of Ballincollig Camogie.",
  subtitle = "Passionate about sport, proud of our community.",
  imageSrc = "/ailbhe.jpeg",
  buttonText,
  buttonLink,
  navBackgroundSticky = "bg-gradient-to-r from-[#3c5443] to-[#5d7767]",
  navBackgroundDefault = "bg-transparent",
}) => {
  const [isSticky, setSticky] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#2c4d30] to-[#9fcab0] text-white">
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          isSticky ? navBackgroundSticky : navBackgroundDefault
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/ccclogo.png"
              alt="Ballincollig Camogie Club Logo"
              className="h-20 w-auto"
            />
            <span className="text-3xl font-bold">
              Ballincollig Camogie Club
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="space-x-8 hidden md:flex font-semibold">
            <a href="#features" className="hover:underline">
              News & Social Media
            </a>
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
          {/* Simple hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        </div>

        {/* Mobile menu (stacked links) */}
        {menuOpen && (
          <div className="md:hidden bg-[#3c5443] px-6 pb-4 pt-6 space-y-4 font-semibold">
            <a
              href="#features"
              className="block hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              News & Social Media
            </a>
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

      {/* Hero content */}
      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-lg mx-auto md:mx-0">
            {title}
          </h1>
          <p className="text-lg md:text-xl max-w-md text-green-100 mx-auto md:mx-0">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="mt-6 inline-block px-8 py-3 rounded-full text-white font-bold bg-[#454851] hover:bg-[#363940] transition mx-auto md:mx-0"
            >
              {buttonText}
            </a>
          )}
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative mt-12 md:mt-0">
          <img
            src={imageSrc}
            alt="Hero"
            className="rounded-xl shadow-2xl mx-auto"
          />
        </div>
      </main>
    </div>
  );
};

export default HeroWithNav;
