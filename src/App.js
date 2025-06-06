// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import './index.css';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import NewArrivals from './pages/NewArrivals';
import BestSeller from './pages/BestSeller';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import ShoppingCart from './pages/ShoppingCart';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import SignUpForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women addToCart={addToCart} />} />
        <Route path="/men" element={<Men addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/best-seller" element={<BestSeller />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
