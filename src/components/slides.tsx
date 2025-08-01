// Import necessary React hooks
import React, { useEffect, useRef, useState } from "react";

// Define the type for a single slide
type Slide = {
  imageSrc: string; 
};

// Define the props that the ImageSlideshow component accepts
type ImageSlideshowProps = {
  slides: Slide[];            
  title: string;              
  description: string;        
  interval?: number;          
  width?: string;     
  height?: string;            
};

// Functional component definition with default props
const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  slides,
  title,
  description,
  interval = 4000,
  width = "100%",
  height = "400px",
}) => {
  // Track the currently active slide index
  const [current, setCurrent] = useState(0);

  // A reference to store the timeout ID for slide transitions
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear any existing timeout to avoid overlapping timers
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Automatically change slides at the given interval
  useEffect(() => {
    resetTimeout(); // Clear previous timeout
    timeoutRef.current = setTimeout(() => {
      // Move to the next slide, looping back to 0 at the end
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    // Cleanup: clear timeout when component unmounts or `current` changes
    return () => resetTimeout();
  }, [current, slides.length, interval]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-40">
      {/* Slideshow container */}
      <div
        className="overflow-hidden rounded-xl shadow-lg mx-auto"
        style={{ width, height }} 
      >
        {/* Inner wrapper that slides horizontally */}
        <div
          className="whitespace-nowrap transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }} // Moves to current slide
        >
          {/* Render each image slide */}
          {slides.map((slide, idx) => (
            <img
              key={idx} // React key for list rendering
              src={slide.imageSrc} // Slide image source
              alt={`Slide ${idx + 1}`} // Accessible alt text
              className="inline-block w-full h-full object-cover" // Layout styles
              style={{ width, height }} // Match outer container
            />
          ))}
        </div>

        {/* Dots navigation (below image) */}
        <div className="flex justify-center mt-4 space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-gray-800" : "bg-gray-400"
              }`} // Highlight active dot
              onClick={() => setCurrent(idx)} // Manually switch slides
              aria-label={`Go to slide ${idx + 1}`} // Accessibility label
            />
          ))}
        </div>
      </div>

      {/* Title and description below slideshow */}
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#454851]">{title}</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">{description}</p>
      </div>
    </div>
  );
};

// Export the component to use it elsewhere
export default ImageSlideshow;
