import React from "react"; // JSX rendering
import { Link } from 'react-router-dom'; //internal navigation

// Define the props(params) it can accept, ? means optional
type HeroWithNavProps = {
  title?: React.ReactNode;                  // can be JSX
  subtitle?: string;                   
  imageSrc?: string;                   
  buttonText?: string;                 
  buttonLink?: string;                 
  navBackgroundSticky?: string;        
  navBackgroundDefault?: string;       
};

// Define the HeroWithNav component as a functional component
// Default values, with button being optional and left out if not given
const HeroWithNav: React.FC<HeroWithNavProps> = ({
  title = "Welcome to the home of Ballincollig Camogie.",    
  subtitle = "Passionate about sport, proud of our community.", 
  imageSrc = "/ailbhe.jpeg",                                  
  buttonText,                                                 
  buttonLink,                                                 
  navBackgroundSticky = "bg-gradient-to-r from-[#3c5443] to-[#5d7767]", 
  navBackgroundDefault = "bg-transparent",                    
}) => {
  // Declare a state variable to track if navbar is sticky
  const [isSticky, setSticky] = React.useState(false);

  // Effect hook to update sticky state on scroll
  React.useEffect(() => {
    // Function to update the sticky state depending on scroll position
    const handleScroll = () => {
      setSticky(window.scrollY > 0); // If scrolled down, set sticky to true
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // JSX returned by the component
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#2c4d30] to-[#9fcab0] text-white">
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          isSticky ? navBackgroundSticky : navBackgroundDefault
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
          {/* Logo and site name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/ccclogo.png" alt="Ballincollig Camogie Club Logo" className="h-20 w-auto" />
            <span className="text-3xl font-bold">Ballincollig Camogie Club</span>
          </Link>

          {/* Navigation links (only visible on medium+ screens) */}
          <div className="space-x-8 hidden md:flex font-semibold">
            <a href="#features" className="hover:underline">News</a>
            <a href="#pricing" className="hover:underline">Training</a>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Text section */}
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



        {/* Image section */}
        <div className="md:w-1/2 relative mt-12 md:mt-0">
          <img src={imageSrc} alt="Hero" className="rounded-xl shadow-2xl mx-auto" />
        </div>
      </main>
    </div>
  );
};

// Export the component so it can be used elsewhere
export default HeroWithNav;
