import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import img1 from '../assets/new-img/AYVA IMAGES (53).webp';
import img2 from '../assets/new-img/AYVA IMAGES (52).webp';
import img3 from '../assets/new-img/AYVA IMAGES (54).webp';
import img4 from '../assets/new-img/AYVA IMAGES (43).webp';
import img5 from '../assets/new-img/AYVA IMAGES (44).webp';
import img6 from '../assets/new-img/AYVA IMAGES (45).webp';

const products = [
  { title: "Men’s Oversize T-Shirts", img: img1 },
  { title: "Men’s Regular T-Shirts", img: img2 },
  { title: "Men’s Shirts", img: img3 },
  { title: "Tote Hand Bags", img: img4 },
  { title: "Sling Hand Bags", img: img5 },
  { title: "Women’s Wallet", img: img6 },
];

// Parent variants for staggering
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Delay between cards
    },
  },
};

// Child variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ExploreCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,    // Animate every time
    threshold: 0.2,         // 20% visible
  });

  return (
    <div ref={ref} className="container py-5 product-home-card2">
      <h5 className="text-center mb-4">Explore Ayvva Men’s Collection</h5>
      <motion.div
        className="row justify-content-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {products.map((item, idx) => (
          <motion.div
            className="col-6 col-md-3 mb-4"
            key={idx}
            variants={cardVariants}
          >
            <div className="position-relative overflow-hidden" style={{ borderRadius: '0px', height: '100%' }}>
              <div style={{ position: 'relative', height: '250px' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className="d-flex justify-content-center align-items-center overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(51, 51, 51, 0.6)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <span>Shop Now</span>
                </div>
              </div>
              <div className="text-center p-2">
                <small className="fw-semibold text-black">{item.title}</small>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Hover effect */}
      <style jsx="true">{`
        .position-relative:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ExploreCard;
