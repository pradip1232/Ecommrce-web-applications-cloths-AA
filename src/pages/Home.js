import React from 'react';
import '../components/assets/css/Home.css';

import FirstStyleSectionHome from '../components/HomeComponents/FirstStyleSectionHome';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from '../components/assets/img/41ac248038457c4822f058ef68867ea5 1.png';
import ExploreCard from '../components/HomeComponents/ExploreCard';
import NewArrivalsSlider from '../components/HomeComponents/NewArrivalsSlider';

const Home = () => (
  < >
    <FirstStyleSectionHome />

    {/* second sections */}
    <ExploreCard />
    {/* third sections  */}
    <section className='overseebanner-home'>

      <Container fluid className="p-0">
        <Row className="g-0 position-relative banner-row">
          {/* <Col  xs={12} md={6}>
              <img src={img} alt="Model 1" className="img-fluid full-height-img" />
            </Col>
            <Col xs={12} md={6}>
              <img src={img} alt="Model 2" className="img-fluid full-height-img" />
            </Col> */}

          <div className="centered-content text-center">
            <h5 className="fw-bold text-uppercase">Bold. Breathable. Oversized</h5>
            <Button variant="dark" className="mt-2">Explore Oversize Tees</Button>
          </div>
        </Row>
      </Container>

    </section>






    <NewArrivalsSlider />

    <section>
      <Container className='text-center'>
        Hello
      </Container>

    </section>
  </>
);

export default Home;
