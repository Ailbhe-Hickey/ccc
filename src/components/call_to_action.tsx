import { Link } from "react-router-dom";

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-t from-[#3c5443] to-[#61876d] text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Whether you're looking to play, volunteer, or just support, there's a place for you here.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 rounded-full bg-[#454851] hover:bg-[#363940] transition font-bold inline-block hover:underline"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
