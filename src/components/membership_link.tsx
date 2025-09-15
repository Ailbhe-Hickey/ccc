
type MembershipProps = {
  title: string;
  subtitle?: string;
};

const MembershipLink: React.FC<MembershipProps> = ({ title, subtitle }) => {
  return (
    <section className="w-full bg-gray-100">
      {/* Header */}
      <section className="w-full py-12 bg-[#E6E7E8]">
        <h2 className="text-center text-3xl font-semibold mb-4 text-[#454851]">
          {title}
        </h2>
        <p className="text-center text-lg text-[#555863] mx-auto">
          {subtitle}
        </p>
      </section>

      {/* Modern Box */}
      <section className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <div >

          <p className="text-gray-600 mb-20 mt-12">
            Become a member today and be part of our growing community. 
            Click below to explore membership options and sign up.
          </p>

          <a
            href="https://ballincolliggaa.ie/membership_products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#2D6A4F] text-white rounded-xl font-medium shadow-md hover:bg-[#22543D] transition"
          >
            View Memberships
            <span className="ml-2">→</span>
          </a>

        </div>
      </section>
    </section>
  );
};

export default MembershipLink;


