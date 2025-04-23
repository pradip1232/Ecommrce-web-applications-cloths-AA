import React from 'react'


import img from '../assets/new-img/AYVA IMAGES (51).webp';
import img2 from '../assets/new-img/AYVA IMAGES (50).webp';
import { Col, Container, Row } from 'react-bootstrap';

const FirstStyleSectionHome = () => {
    return (
        <>
            <Container fluid className='first-home-sections  style-showcase'>
                <Row className='justify-content-center mb-4'>
                    <Col md={6} sm={6} className='d-flex justify-content-center p-0 mb-3 mb-md-0'>
                        <img src={img} alt="Front View" className="img-fluid model-img" />
                    </Col>
                    <Col md={6} sm={6} className='d-flex justify-content-center '>
                        <img src={img2} alt="Back View" className="img-fluid model-img-2" />
                    </Col>
                </Row>


            </Container>
            <Container>
                <Row>
                    <Col md={12} className='text-left'>
                        <h5 className='text-uppercase fw-bold style-title'>
                            Style That Speak’s, Quality That Lasts
                        </h5>
                        <p className='text-muted discover-text'>Discover the looks →</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FirstStyleSectionHome
