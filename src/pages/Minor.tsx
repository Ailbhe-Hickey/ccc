import CallToActionSection from "../components/call_to_action";
import FeatureBox from "../components/grid_with_text";
import HeroWithNav from "../components/hero_with_nav";
import TestimonialsSection from "../components/testomonials";

const MinorPage: React.FC = () => {
  return (
    <>
      <HeroWithNav
        title={
          <>
            Welcome to the home of our <br />
            <span className="text-[#454851]">Minors</span>.
          </>
        }
        subtitle="The Minor team is decent"
        imageSrc="/ella.jpg"
        buttonText="Join our Minors"
          navBackgroundSticky = "bg-gradient-to-r from-[#3c5443] to-[#5d7767]"
        navBackgroundDefault="bg-transparent"
      />

      <section id="features" className="py-16 bg-gray-100 text-[#454851]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-16 min-h-[400px]">

          {/* Grid of FeatureBoxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2">
            <FeatureBox title="Unders 5s - 12s" description="Prime age group for all star Ailbhe." />
            <FeatureBox title="Under 14s - 16s" description="Idk if this is right." />
            <FeatureBox title="Minor" description="Our Minor team has an octopus named Ella." />
            <FeatureBox title="Adult Teams" description="Featuring Bairbs - queen of the washing machine." />
          </div>

          {/* Text next to grid */}
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center mt-12 md:mt-0">
            <h2 className="text-3xl font-semibold mb-6">Our Teams</h2>
            <p className="text-lg max-w-md">
Different            </p>
          </div>

        </div>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
};


export default MinorPage;