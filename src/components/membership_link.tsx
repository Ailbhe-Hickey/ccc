type Membership = {
  text: string;
  linkUrl: string;
};

type MembershipProps = {
  title: string;
  subtitle?: string;
};

const MembershipLink: React.FC<MembershipProps> = ({
  title,
  subtitle,
}) => {
  return (
    
    <section className="w-full  bg-gray-100">

      <section className=" w-full py-12 bg-[#E6E7E8]">
        <h2 className="items-center text-center text-3xl font-semibold mb-4 text-[#454851]">{title}</h2>
        <p className="items-center text-center text-lg  text-[#555863] mx-auto md:mx-0">{subtitle}</p>
      </section>


      <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center">
      </section>


    </section>
  );
};

export default MembershipLink;

