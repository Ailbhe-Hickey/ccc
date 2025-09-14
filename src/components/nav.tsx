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
  const [isSticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
            className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
              isSticky ? navBackgroundSticky : navBackgroundSticky
            }`}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
              {/* Logo and site name */}
              <Link to="/" className="flex items-center space-x-3">
                <img src="/ccclogo.png" alt="Ballincollig Camogie Club Logo" className="h-20 w-auto" />
                <span className="text-3xl font-bold text-white">Ballincollig Camogie Club</span>
              </Link>
    
              {/* Navigation links (only visible on medium+ screens) */}
              <div className="space-x-8 hidden md:flex font-semibold text-white">
                <a href="#features" className="hover:underline">News & Social Media</a>
                <Link to="/policies" className="hover:underline">Policies</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </div>
            </div>
          </nav>
  );
};

export default NavBar;
