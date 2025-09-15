import CallToActionSection from "../components/call_to_action";
import MembershipLink from "../components/membership_link";
import NavBar from "../components/nav";



const MembershipPage: React.FC = () => {
  return (
    <>

    <NavBar/>
      
    <MembershipLink
        title="Memberships"
        subtitle="Follow the link to sign up"/> 

    <CallToActionSection />

    </>
  );
};


export default MembershipPage;