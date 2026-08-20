// This is App.jsx
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/home/Home';
import About from './Components/pages/about/About';
import Services from './Components/pages/services/Services';
import Contact from './Components/pages/contact/Contact'; 
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer';

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/services" element = {<Services />} />
                <Route path = "/contact" element = {<Contact />} />
            </Routes>

              <Footer />
        </BrowserRouter>

          
    </>
  )
}

export default App