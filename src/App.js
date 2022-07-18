import React from "react";
import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";

function App() {

  return (
    <main>
      <GlobalStyle/>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
