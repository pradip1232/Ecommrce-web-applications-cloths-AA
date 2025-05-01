import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../components/assets/css/footer.css';


import logo from '../components/assets/new-img/AYVA IMAGES (63).webp';

const Footer = () => {
    return (
        <footer className="bg-light text-dark pt-5 border-top footer">
            <div className="container">
                <div className="row gy-4">

                    {/* Logo and About */}
                    <div className="col-lg-3 col-md-6 text-center">
                        <img src={logo} alt="Ayva Logo" className="" />
                        <p className="small">
                            At Ayva we bring you timeless fashion with a commitment to quality and sustainability. Explore our premium collections crafted for style and comfort.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className="text-decoration-none text-dark">Men</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Women</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">New Arrivals</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Sale</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Collections</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="">Customer Service</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className="text-decoration-none text-dark">FAQs</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Shipping & Delivery</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Returns & Exchanges</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Order Tracking</a></li>
                            <li><a href="contact-us" className="text-decoration-none text-dark">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Company Info */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="">Company Info</h6>
                        <ul className="list-unstyled small">
                            <li><a href="#" className="text-decoration-none text-dark">About Us</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Careers</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Sustainability</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Privacy Policy</a></li>
                            <li><a href="#" className="text-decoration-none text-dark">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="">Contact Information</h6>
                        <ul className="list-unstyled small">
                            <li><strong>Head Office Address:</strong> Street Address, City, State</li>
                            <li><strong>Email:</strong> support@xyz.com</li>
                            <li><strong>Phone:</strong> +91-XXXXXXXXXX</li>
                            <li><strong>Hours:</strong> Mon–Sat: 9 AM–9 PM</li>
                            <li>Cash On Delivery Available</li>
                        </ul>
                    </div>
                </div>

                {/* Subscription & Socials */}
                <div className="row ">
                    <div className="col-md-8 mx-auto text-center">
                        <div className="mt-3">
                            <a href="#" className="text-dark me-3"><FaFacebook /></a>
                            <a href="#" className="text-dark me-3"><FaInstagram /></a>
                            <a href="#" className="text-dark"><FaTwitter /></a>
                        </div>
                        <p className="mb-2">Email Subscription for Offers & Newsletters</p>
                        <form className="d-flex justify-content-center">
                            <input type="email" className="form-control w-50 me-2" placeholder="Enter your email" />
                            <button className="btn btn-dark">SUBSCRIBE</button>
                        </form>

                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-1 border-top  pb-3 small">
                    Made with love in India, powered by <a href="#" className="text-decoration-none fw-bold">Squibfactory</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
