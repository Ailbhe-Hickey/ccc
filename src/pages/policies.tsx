import CallToActionSection from "../components/call_to_action";
import NavBar from "../components/nav";
import PolicyListWithImage from "../components/policy_links";

const policies = [
  {
    text: "GAA Code of Behaviour",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/gaacodeofbehaviour.pdf",
  },
  {
    text: "Section 1: Code of Behaviour (Underage) & Child Safeguarding Policy Statement\n - Introduction, Index & Appendix",
    linkUrl: "https://example.com/gaa-section-1.pdf",
  },
  {
    text: "Section 2: Child Safeguarding Risk Assessment & Child Safeguarding Statement",
    linkUrl: "https://example.com/gaa-section-2.pdf",
  },
  {
    text: "Section 3: Maintaining Good Practice & Behaviour",
    linkUrl: "https://example.com/gaa-section-3.pdf",
  },
  {
    text: "Section 4: Dealing with Alleged Breaches of the Code of Behaviour",
    linkUrl: "https://example.com/gaa-section-4.pdf",
  },
  {
    text: "Section 5: Recruitment & Selection of Coaches, Supervisors & other Volunteers",
    linkUrl: "https://example.com/gaa-section-5.pdf",
  },
  {
    text: "Section 6: Player Injury Funds & Insurance",
    linkUrl: "https://example.com/gaa-section-6.pdf",
  },
  {
    text: "Section 7: Club & County Children's Officer",
    linkUrl: "https://example.com/gaa-section-7.pdf",
  },
  {
    text: "Section 8: Club & County Designated Liaison Person",
    linkUrl: "https://example.com/gaa-section-8.pdf",
  },
  {
    text: "Section 9: Organising Club Activities for Underage Players",
    linkUrl: "https://example.com/gaa-section-9.pdf",
  },
  {
    text: "Section 11: Dealing with Allegations or Concerns of Abuse",
    linkUrl: "https://example.com/gaa-section-11.pdf",
  },
  {
    text: "Section 12: Tackling Bullying in your Club",
    linkUrl: "https://example.com/gaa-section-12.pdf",
  },
  {
    text: "Appendices",
    linkUrl: "https://example.com/gaa-appendices.pdf",
  },
  {
    text: "Ballincollig GAA Safeguarding Statement",
    linkUrl: "https://example.com/ballincollig-safeguarding.pdf",
  },
  {
    text: "Dealing with Allegations",
    linkUrl: "https://example.com/ballincollig-allegations.pdf",
  },
  {
    text: "Ballincollig GAA Constitution",
    linkUrl: "https://example.com/ballincollig-constitution.pdf",
  },
  {
    text: "Juvenile Mentors Handbook",
    linkUrl: "https://example.com/mentors-handbook.pdf",
  },
  {
    text: "GAA Social Media Policy",
    linkUrl: "https://example.com/social-media-policy.pdf",
  },
];

const PoliciesPage: React.FC = () => {
  return (
    <>
      <NavBar
      
      />

     

        <PolicyListWithImage
        title="Our Club Policies"
        subtitle="Click the links below to read more"
        items={policies}
      /> 
      
      <CallToActionSection />
    </>
  );
};


export default PoliciesPage;