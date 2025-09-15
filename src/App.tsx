import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import MembershipPage from './pages/membership';
import MinorPage from './pages/Minor';
import PoliciesPage from './pages/policies';
import Social_media_page from './pages/social_media';
import ScrollToTop from "./scroll_to_top";



function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/social_media" element={<Social_media_page />} />
      <Route path="/minor" element={<MinorPage />} />
      <Route path="/policies" element={<PoliciesPage />} />
      <Route path="/membership" element={<MembershipPage />} />
    </Routes>
    </>
  );
}

export default App;
