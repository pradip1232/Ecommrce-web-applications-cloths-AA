import React from 'react';
import '../components/assets/css/Home.css';

import FirstStyleSectionHome from '../components/HomeComponents/FirstStyleSectionHome';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from '../components/assets/img/41ac248038457c4822f058ef68867ea5 1.png';
import ExploreCard from '../components/HomeComponents/ExploreCard';
import NewArrivalsSlider from '../components/HomeComponents/NewArrivalsSlider';


import leftimg from '../components/assets/new-img/AYVA IMAGES (58).webp';
import righttimg from '../components/assets/new-img/AYVA IMAGES (56).webp';



import gg from '../components/assets/new-img/AYVA IMAGES (30).webp';
import SlingBagsSection from '../components/HomeComponents/SlingBagsSection';
import ImageGridSection from '../components/HomeComponents/ImageGridSection';
import TestimonialSlider from '../components/HomeComponents/TestimonialSlider';
const Home = () => (
  < >
    <FirstStyleSectionHome />

    {/* second sections */}
    <ExploreCard />
    {/* third sections  */}
    {/* <section className='overseebanner-home'>

      <Container fluid className="p-0">
        <Row className="g-0 position-relative banner-row">
          <Col  xs={12} md={6}>
              <img src={leftimg} alt="Model 1" className="img-fluid full-height-img" />
            </Col>
            <Col xs={12} md={6}>
              <img src={righttimg} alt="Model 2" className="img-fluid full-height-img" />
            </Col>

          <div className="centered-content text-center">
            <h5 className="fw-bold text-uppercase">Bold. Breathable. Oversized</h5>
            <Button variant="dark" className="mt-2">Explore Oversize Tees</Button>
          </div>
        </Row>
      </Container>

    </section> */}






    <NewArrivalsSlider />

    {/* <section>
      <Container className='text-center'>
        Hello
      </Container>

    </section> */}



    <section className="girls-banner-section">
      <div className="container-fluid p-0">
        <div className="banner-wrapper position-relative">
          <div className="banner-content position-absolute">
            <h2 className="fw-boldd">YOUR PERFECT PLUS-<br />ONE FOR EVERY OUTFIT</h2>
            <p className="text-muted mt-3 mb-4">COMPACT, CHIC, AND EFFORTLESSLY YOU</p>
            <a href="#" className="btn btn-dark">Shop the Collection</a>
          </div>
        </div>
      </div>
    </section>




    <SlingBagsSection />

    <ImageGridSection />



<TestimonialSlider />
    

  </>
);

export default Home;
