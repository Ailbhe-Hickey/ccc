import CallToActionSection from "../components/call_to_action";
import ContactDetails from "../components/contact_details";
import NavBar from "../components/nav";



const ContactPage: React.FC = () => {
  return (
    <>
      <NavBar/>

     <ContactDetails
        title="Contact Us"
        subtitle="Reach out to our committee"
        contacts={[
          {
            role: "Chairperson",
            name: "Michelle Finnerty",
            email: "ballincollig.camogie.chair@gmail.com",
          },
          {
            role: "Secretary",
            name: "Linda Lenihan",
            email: "secretary.ballincollig.cork@camogie.ie",
          },
          {
            role: "Treasurers",
            name: "Bairbre Hickey & Johnny McCarthy",
            email: "ballincollig.camogie.treasurer@gmail.com",
          },
          {
            role: "Registrars",
            name: "Mary McCormack & Doireann McGibney",
            email: "ballincollig.camogie.registrar@gmail.com",
          },
          {
            role: "Children’s Welfare Officer",
            name: "Annette Murphy",
            email: "childrensofficer.ballincollig.cork@camogie.ie",
          },
        ]}
      />


      
      <CallToActionSection />


    </>
  );
};


export default ContactPage;