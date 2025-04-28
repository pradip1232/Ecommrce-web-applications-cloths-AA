import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion';
import '../components/assets/css/About.css';

import img1 from '../components/assets/new-img/AYVA IMAGES (2).webp';
import img2 from '../components/assets/new-img/AYVA IMAGES (10).webp';

import img3 from '../components/assets/new-img/AYVA IMAGES (3).webp';
import s1 from '../components/assets/new-img/AYVA IMAGES (4).webp';
import s2 from '../components/assets/new-img/AYVA IMAGES (5).webp';




import i1 from '../components/assets/new-img/AYVA IMAGES (15).webp';
import i2 from '../components/assets/new-img/AYVA IMAGES (2).webp';
import i3 from '../components/assets/new-img/AYVA IMAGES (13).webp';
import i4 from '../components/assets/new-img/AYVA IMAGES (37).webp';
const images = [i1, i2, i3, i4];




// import bg1 from '../components/assets/new-img/AYVA IMAGES (12).webp';

const About = () => {
  return (
    <>
      <section className='about-sectiosn-first-sectiosn'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={5}>
              <img src={img1} className='begs-images' />
            </Col>
            <Col md={5}>
              <img src={img2} className='limited-boys' />
            </Col>
          </Row>

          <h5 className='text-center'>Luxury Reimagined for the Modern India</h5>
        </Container>
      </section>


      <section>
        <div className="container my-5">
          <div className="row align-items-center">
            {/* Left Column - Text */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h5 className="fw-semibold mb-3">OUR STORY</h5>
              <p>
                AYVVA is a premium accessory and ready-to-wear brand, founded in New Delhi in 2024.
                Since its inception, AYVVA has been on a mission to redefine high-end fashion in India.
              </p>
              <p>
                Capturing the spirit of modern lifestyle and luxury, AYVVA blends elegance with a
                distinctive touch of elitism and contemporary style. The brand is a byword for high-quality
                craftsmanship — offering timeless luxury styles that transcend trends and last a lifetime.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="col-12 col-md-6 position-relative d-flex justify-content-end  ">
              <img src={img3} alt="Main" className="img-fluid w-75 h-75 rounded shadow" />

              {/* Small Image 1 */}
              <img
                src={s1}
                alt="Detail 1"
                className="position-absolute rounded shadow"
                style={{
                  width: '100px',
                  height: '120px',
                  top: '10%',
                  left: '14%',
                  objectFit: 'cover',
                  border: '2px solid white',
                  backgroundColor: 'white',
                }}
              />

              {/* Small Image 2 */}
              <img
                src={s2}
                alt="Detail 2"
                className="position-absolute rounded shadow"
                style={{
                  width: '100px',
                  height: '120px',
                  top: '55%',
                  left: '18%',
                  objectFit: 'cover',
                  border: '2px solid white',
                  backgroundColor: 'white',
                }}
              />
            </div>
          </div>
        </div>

      </section>



      <section>
        <div className="container-fluid px-0 my-5">
          {/* Text Section */}
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-12'>

                <div className="text-center mb-4 px-3">
                  <h5 className="fw-semibold">THE PHILOSOPHY BEHIND AYVVA</h5>
                  <p className="mt-3">
                    Bridging the gap between everyday comfort and top-notch quality, AYVVA delivers
                    unparalleled designs — combining ready-to-wear clothing and statement accessories
                    that enhance every look.
                  </p>
                  <p>
                    Every product is a reflection of fine craftsmanship, elevated design, and timeless
                    luxury, offering a sense of exclusivity and self-expression.
                  </p>
                  <p className="fw-bold mt-4">
                    Our mission? <br />
                    <span className="fw-normal">
                      To help you feel your best, boldest self in your fast-paced life — with outfits
                      and accessories that don’t just follow trends, but transcend them.
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Full-width Image Grid */}
          <div className="d-flex flex-wrap philosophy-images">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="philosophy-img-wrapper"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <img src={img} alt={`AYVVA look ${index + 1}`} className="w-100 h-100 object-fit-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-white text-center about-section-laxuary">
        <div className="container px-4">
          {/* Luxury That Lasts */}
          <div className="mb-5">
            <h5 className="fw-semibold mb-3">LUXURY THAT LASTS</h5>
            <p>
              AYVVA’s collections are created with the belief that fashion is not just an art — it’s an experience.
              We design for the refined, the bold, and the modern. Each piece brings a harmony of versatility, structure,
              and timeless design.
            </p>
            <p>
              With pieces that exude a sense of luxury and unmatched elegance, AYVVA goes beyond fast fashion
              to offer investment-worthy styles that make a lasting impact.
            </p>
          </div>

          {/* Meet the Founders */}
          <div>
            <h5 className="fw-semibold mb-3">MEET THE FOUNDERS</h5>
            <p>
              With years of experience in India’s premium fashion industry, AYVVA’s founders shared a passion for elite fashion
              and a vision to bridge the gap in the country’s luxury fashion consumer market.
            </p>
            <p>
              Fueled by this shared dream, they established their own label — now known as AYVVA — a rising name in India’s luxury
              fashion landscape, admired for its elegance, authenticity, and design excellence.
            </p>
          </div>
        </div>
      </section>


      <section className="hero-banner-about-page-last-sectiosn d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
        <div className="content text-white px-3">
          <h5 className="fw-semibold">AYVVA IS MORE THAN A LABEL — IT’S A LIFESTYLE</h5>
          <p className="mt-2">
            It’s the celebration of <span className="highlight">self-expression</span>, <span className="highlight">sophistication</span>, and <span className="highlight">style</span>
          </p>
        </div>
      </section>

    </>
  )
}

export default About
