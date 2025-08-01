import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import MinorPage from './pages/Minor';
import ScrollToTop from "./scroll_to_top";



function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/minor" element={<MinorPage />} />
    </Routes>
    </>
  );
}

export default App;
