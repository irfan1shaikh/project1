import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from "./components/HomePage"
import AboutUs from './components/about_us';
import Services from './components/Services';
import FAQs from './components/FAQs';
import ContactUs from './components/Contact-us';
import TermsAndConditions from './components/T&C';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Services" Component={<Services />} />
            <Route path="/about-us" Component={<AboutUs />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="Contact-us" element={<ContactUs />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;