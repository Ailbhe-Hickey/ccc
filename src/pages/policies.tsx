import CallToActionSection from "../components/call_to_action";
import NavBar from "../components/nav";
import PolicyListWithImage from "../components/policy_links";

const policies = [
  {
    text: "GAA Code of Behaviour.  ???????????",
    linkUrl: "",
  },
  {
    text: "Section 1: Code of Behaviour (Underage) & Child Safeguarding Policy Statement",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/gh96alunyhh5qa9bczoo.pdf",
  },
  {
    text: "Section 2: Child Safeguarding Risk Assessment & Child Safeguarding Statement",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/zzhdfyrav1qlaeio4fnv.pdf",
  },
  {
    text: "Section 3: Maintaining Good Practice & Behaviour",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/aipry8jvv278thwu3rj8.pdf",
  },
  {
    text: "Section 4: Dealing with Alleged Breaches of the Code of Behaviour",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/xcf15mjugcljoqujvp4t.pdf",
  },
  {
    text: "Section 5: Recruitment & Selection of Coaches, Supervisors & other Volunteers",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/la4f6k6ip7xfexhdswrk.pdf",
  },
  {
    text: "Section 6: Player Injury Funds & Insurance",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/gzewakmzn61y6jg7p7uz.pdf",
  },
  {
    text: "Section 7: Club & County Children's Officer",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/ltiietggmw9b1wvew1qm.pdf",
  },
  {
    text: "Section 8: Club & County Designated Liaison Person",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/n6yhg1kz6fqqfbqzc1du.pdf",
  },
  {
    text: "Section 9: Organising Club Activities for Underage Players",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/va2lxr5kkimvqzxi6gdw.pdf",
  },
   {
    text: "Section 10.  ???????????",
    linkUrl: "",
  },
  {
    text: "Section 11: Dealing with Allegations or Concerns of Abuse",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/jdgy1fj7mftfmj8jk5nj.pdf",
  },
  {
    text: "Section 12: Tackling Bullying in your Club",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/ztfph7tx3erl8jb0pw4j.pdf",
  },
  {
    text: "Appendices",
    linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/q3hcopvrvizugcyq3e8s.pdf",
  },
];

const policies2 =[
    {
      text: "Ballincollig GAA Safeguarding Statement",
      linkUrl: "https://drive.google.com/file/d/17J-QxBiLmNoKIr4YfsnrDaDtugBTmciT/view?pli=1",
    },
    {
      text: "Dealing with Allegations",
      linkUrl: "https://www.gaa.ie/the-gaa/child-safeguarding-and-protection/allegations-of-abuse",
    },
    {
      text: "Ballincollig GAA Constitution",
      linkUrl: "https://sportlomo-userupload.s3.amazonaws.com/uploaded/galleries/7471_uploaded/ae8b060465467244862ddcfbb4878d51e99541d1.pdf",
    },
    {
      text: "Juvenile Mentors Handbook",
      linkUrl: "https://drive.google.com/file/d/1CT6W2vutAvoxbNrtHBB6UAKSdAs6ZCsz/view",
    },
    {
      text: "GAA Social Media Policy",
      linkUrl: "https://www.gaa.ie/api/pdfs/image/upload/skjxfguu6n6lj6kx7fl2.pdf",
  },
]

const PoliciesPage: React.FC = () => {
  return (
    <>
      <NavBar
      
      />

     

        <PolicyListWithImage
        title="Our Club Policies"
        subtitle="Click the links below to read more"
        items={policies}
        items2={policies2}
      /> 
      
      <CallToActionSection />
    </>
  );
};


export default PoliciesPage;