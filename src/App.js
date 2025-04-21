// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import NewArrivals from './pages/NewArrivals';
import BestSeller from './pages/BestSeller';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/best-seller" element={<BestSeller />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
