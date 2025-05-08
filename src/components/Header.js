import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSearch, FaRegHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/img/Ayva_Logo_CDR[1] black 1.png';
import '../components/assets/css/Header.css';

const Header = ({ cartCount }) => {
    return (
        <>
            <motion.div
                className="bg-darkk top-header-bar- text-black text-center small py-1 d-none d-md-block"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container d-flex justify-content-center gap-3">
                    <span>Need Help? Chat with us on WhatsApp</span>
                    <span>|</span>
                    <span>Get Exclusive Offers – Subscribe Now!</span>
                    <span>|</span>
                    <span>Check Delivery Time</span>
                </div>
            </motion.div>

            <Navbar expand="lg" className="py-3 border-bottom bg-white shadow-sm" collapseOnSelect>
                <Container fluid>
                    <Navbar.Brand href='/' className="mx-auto" style={{ height: '60px' }}>
                        <img src={logo} alt="Logo" style={{ height: '60px' }} />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar expand="lg" className="border-bottom bg-white shadow-sm" collapseOnSelect>
                <Container>
                    <Navbar.Toggle aria-controls="main-navbar" />

                    <Navbar.Collapse id="main-navbar">
                        <Nav className=" gap-3 text-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/women">Women</Nav.Link>
                            <Nav.Link as={Link} to="/men">Men</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/new-arrivals">New Arrivals</Nav.Link>
                            <Nav.Link as={Link} to="/best-seller">Best Seller</Nav.Link>
                        </Nav>

                        <div className="d-flex gap-3 align-items-center ms-auto mt-3 mt-lg-0">
                            <FaSearch className="icon-hover" />
                            <Link to="/wishlist">
                                {/* <FaRegHeart className="icon-hover" style={{ fontSize: '20px' }} /> */}
                                <i class="bi bi-heart" style={{ fontSize: '20px' }} ></i>
                            </Link>

                            <Link to="/my-cart" className="position-relative">
                                <i className="bi bi-cart" style={{ fontSize: '20px' }}></i>
                                {cartCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <Link to="/sign-up">
                                <i className="bi bi-person icon-hover" style={{ fontSize: '22px' }}></i>
                            </Link>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
