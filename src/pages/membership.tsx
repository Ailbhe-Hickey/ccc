import CallToActionSection from "../components/call_to_action";
import Membership_link from "../components/membership_link";
import NavBar from "../components/nav";



const MembershipPage: React.FC = () => {
  return (
    <>

    <NavBar/>
      
    <Membership_link
        title="Memberships"
        subtitle="Follow the link to sign up"/> 

    <CallToActionSection />

    </>
  );
};


export default MembershipPage;