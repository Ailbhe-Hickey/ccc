import { Link } from "react-router-dom";
import CallToActionSection from "../components/call_to_action";
import FeatureBox from "../components/grid_with_text";
import HeroWithNav from "../components/hero_with_nav";
import PolicyListWithImage from "../components/policy_links";
import ImageSlideshow from "../components/slides";

const slides = [
  { imageSrc: "/ella.jpg" },
  { imageSrc: "/ailbhe.jpeg" },
  { imageSrc: "/ella.jpg" },
];

const policies = [
  {
    text: "All players must wear protective gear at all times",
    linkText: "Read more",
    linkUrl: "/policies/protective-gear",
  },
  {
    text: "Respect for coaches, teammates, and opponents is mandatory",
    linkText: "View full code of conduct",
    linkUrl: "/policies/code-of-conduct",
  },
  {
    text: "Weekly practice attendance is required unless excused",
    linkText: "Learn about attendance policy",
    linkUrl: "/policies/attendance",
  },
];




const HomePage: React.FC = () => {
  return (
    <>
      <HeroWithNav
        title={
          <>
            Welcome to the home of Ballincollig<br />
            <span className="text-[#454851]">Camogie</span>.
          </>
        }
        subtitle="Better than Eire Og"
        imageSrc="/ailbhe.jpeg"
        buttonText="Join us today!"
        buttonLink="/contact"
        navBackgroundSticky = "bg-gradient-to-r from-[#3c5443] to-[#5d7767]"
        navBackgroundDefault="bg-transparent"
      />

      

      <section id="features" className="py-28 bg-gray-100 text-[#454851]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-16 min-h-[400px]">

          {/* Grid of FeatureBoxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2">
            <FeatureBox title="Unders 5s - 12s" description="Prime age group for all star Ailbhe." />
            <FeatureBox title="Under 14s - 16s" description="Idk if this is right." />
            <Link to="/Minor">
              <FeatureBox
                title="Minor"
                description="Our Minor team has an octopus named Ella."
              />
            </Link>
            <FeatureBox title="Adult Teams" description="Featuring Bairbs - queen of the washing machine." />
          </div>

          {/* Text next to grid */}
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center mt-12 md:mt-0">
            <h2 className="text-3xl font-semibold mb-6">Our Teams</h2>
            <p className="text-lg max-w-md">
              Discover our various age and skill level teams, from underage to senior levels. We are committed to fostering talent and promoting the sport of Camogie in our community.
            </p>
          </div>

        </div>
      </section>
      
        <PolicyListWithImage
        title="Our Club Policies"
        items={policies}
        imageSrc="/policy.png"  
        imageAlt="Club policies"
      /> 

      <ImageSlideshow
          slides={slides}
          title="Look at us go"
          description="Those jerseys are so nice"
          interval={5000}
          width="100%"        // Full width on small screens
          height="auto"       // Adjusts to image aspect ratio
        />
  
           
      <CallToActionSection />
    </>
  );
};


export default HomePage;
