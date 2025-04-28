import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Importing motion

import img from '../assets/new-img/AYVA IMAGES (51).webp';
import img2 from '../assets/new-img/AYVA IMAGES (50).webp';

const FirstStyleSectionHome = () => {
    return (
        <>
            <Container fluid className='first-home-sections style-showcase'>
                <Row className='justify-content-center mb-4'>
                    {/* Left Image with Animation */}
                    <Col md={6} sm={6} className='d-flex justify-content-center p-0 mb-3 mb-md-0'>
                        <motion.img
                            src={img}
                            alt="Front View"
                            className="img-fluid model-img boys-img-home"
                            initial={{ x: '-100vw', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                        />
                    </Col>

                    {/* Right Image with Animation */}
                    <Col md={6} sm={6} className='d-flex justify-content-center'>
                        <motion.img
                            src={img2}
                            alt="Back View"
                            className="img-fluid model-img-2 boys-img-home"
                            initial={{ x: '100vw', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                        />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md={12} className='text-left'>
                        <h5 className='text-uppercase  style-title'>
                            Style That Speaks, Quality That Lasts
                        </h5>
                        <p className='text-muted discover-text'>Discover the looks →</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FirstStyleSectionHome;
