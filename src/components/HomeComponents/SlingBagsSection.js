// components/SlingBagsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

import i1 from '../assets/new-img/AYVA IMAGES (33).webp';
import i2 from '../assets/new-img/AYVA IMAGES (34).webp';
import i3 from '../assets/new-img/AYVA IMAGES (35).webp';
import i4 from '../assets/new-img/AYVA IMAGES (36).webp';




const bags = [
  { id: 1, name: 'Sling Bag', price: '₹999', image: i1 },
  { id: 2, name: 'Sling Bag', price: '₹999', image: i2 },
  { id: 3, name: 'Sling Bag', price: '₹999', image: i3 },
  { id: 4, name: 'Sling Bag', price: '₹999', image: i4 }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const SlingBagsSection = () => {
  return (
    <div className="container py-5 slignbagssection">
      <h3 className="text-center mb-2">SLING HAND BAGS</h3>
      <motion.div
        className="row g-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {bags.map((bag) => (
          <motion.div
            className="col-6 col-md-3 p-1"
            key={bag.id}
            variants={cardVariants}
          >
            <div className="card border-0">
              <img
                src={bag.image}
                alt={bag.name}
                className="card-img-top img-fluid"
                style={{ borderRadius: '0px' }}
              />
              <div className="text-left mt-2">
                <p className="mb-1">{bag.name}</p>
                <strong>{bag.price}</strong>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlingBagsSection;
