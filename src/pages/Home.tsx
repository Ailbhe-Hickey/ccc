import { Link } from "react-router-dom";
import CallToActionSection from "../components/call_to_action";
import FeatureBox from "../components/grid_with_text";
import HeroWithNavNoScroll from "../components/hero_with_nav_no_scroll";
import ImageSlideshow from "../components/slides";

const slides = [
  { imageSrc: "/ella.jpg" },
  { imageSrc: "/ailbhe.jpeg" },
  { imageSrc: "/pic.jpg" },
];





const HomePage: React.FC = () => {
  return (
    <>
      <HeroWithNavNoScroll
        title={
          <>
            Welcome to the home of Ballincollig<br />
            <span className="text-[#454851]">Camogie</span>.
          </>
        }
        subtitle="Better than Eire Og"
        imageSrc="/ailbhe.jpeg"
        buttonText="Contact us today!"
        buttonLink="/contact"
      />

      

      <section id="features" className="py-28 bg-gray-100 text-[#454851]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:space-x-16 min-h-[400px]">

          {/* Grid of FeatureBoxes */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2">
            <FeatureBox title="Unders 5s - 12s" description="Prime age group for all star Ailbhe." />
            <FeatureBox title="Under 14s - 16s" description="Idk if this is right." />
            <Link to="/Minor">
              <FeatureBox
                title="Minor"
                description="Our Minor team has an octopus named Ella."
              />
            </Link>
            <FeatureBox title="Adult Teams" description="Featuring Bairbs - queen of the washing machine." />
          </div> */}

          {/* Grid of FeatureBoxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2">
            
            <Link to="/social_media">
              <FeatureBox
                title="Social Media"
                description="Get updates on our latest news and events thorugh our social media channels"
              />
            </Link>

            <Link to="/membership">
              <FeatureBox
                title="Memberships"
                description="Ready to join? Sign up for a membership and be part of our Camogie club"
              />
            </Link>

            <Link to="/policies">
              <FeatureBox
                title="Polices"
                description="Read the GAA and our club policies"
              />
            </Link>

            <Link to="/contact">
              <FeatureBox
                title="Contact Us"
                description="Contact us for any inquiries you may have"
              />
            </Link>
          </div>

          {/* Text next to grid */}
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center mt-12 mb-16 md:mt-0">
            <h2 className="text-3xl font-semibold mb-6">Collig Camogie</h2>
            <p className="text-lg max-w-md">
              Discover our various age and skill level teams, from underage to senior levels. We are committed to fostering talent and promoting the sport of Camogie in our community
            </p>
          </div>

        </div>
      </section>


      

      <ImageSlideshow
          slides={slides}
          title="Look at us go"
          description="Gwan Leah, snatch that slioter"
          interval={5000}
          width="100%"        // Full width on small screens
          height="auto"       // Adjusts to image aspect ratio
        />
  
           
      <CallToActionSection />
    </>
  );
};


export default HomePage;
