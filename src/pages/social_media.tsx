import CallToActionSection from "../components/call_to_action";
import NavBar from "../components/nav";
import Social_media from "../components/social_media";

const socials = [
  {
    text: "Ballincollig Camogie Instagram",
    linkUrl: "https://www.instagram.com/ballincolligcamogieclub/",
    iconUrl: "/insta.png",
  },
  {
    text: "Ballincollig Camogie X (Twitter)",
    linkUrl: "https://x.com/colligcamogie?lang=en",
    iconUrl: "/x.png",
  },
  {
    text: "Ballincollig Camogie Facebook",
    linkUrl: "https://www.facebook.com/BallincolligCamogieClub/",
    iconUrl: "/facebook.svg.png",
  },
  {
    text: "Ballincollig Camogie Clubzap",
    linkUrl: "https://dashboard.clubzap.com/download?club_id=4975",
    iconUrl: "/clubzap.png",
  },
];


const Social_media_page: React.FC = () => {
  return (
    <>
      <NavBar/>
      
      <Social_media
        title="Get all the latest news and updates"
        subtitle="Contact us through our social media channels"
        items={socials}
      /> 

    <CallToActionSection />

    </>
  );
};


export default Social_media_page;