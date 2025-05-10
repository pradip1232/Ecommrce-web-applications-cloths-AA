import React from 'react';
import { motion } from 'framer-motion';

import i1 from '../assets/new-img/AYVA IMAGES (40).webp';
import i2 from '../assets/new-img/AYVA IMAGES (32).webp';
import i3 from '../assets/new-img/AYVA IMAGES (39).webp';
import i4 from '../assets/new-img/AYVA IMAGES (48).webp';
import i5 from '../assets/new-img/AYVA IMAGES (38).webp';
import i6 from '../assets/new-img/AYVA IMAGES (14).webp';

const images = [
  { src: i1, label: 'BEST SELLER', name: 'Product Name' },
  { src: i2, label: 'HOT DEAL', name: 'Classic Tee' },
  { src: i3, label: 'NEW ARRIVAL', name: 'Summer Look' },
  { src: i4, label: 'TRENDING', name: 'Stylish Bag' },
  { src: i5, label: 'EDITOR PICK', name: 'Urban Wear' },
  { src: i6, label: 'EXCLUSIVE', name: 'Daily Comfort' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ImageCard = ({ img }) => (
  <motion.div className="image-card position-relative overflow-hidden w-100 h-100" variants={itemVariants}>
    <img src={img.src} alt={img.name} className="w-100 h-100 object-fit-cover" />
    <div className="overlay d-flex flex-column justify-content-center align-items-center text-white text-center">
      <div className="text-warning">
        ★★★★★
      </div>
      <h6 className="mb-0">{img.label}</h6>
      <p className="mb-0">{img.name}</p>
    </div>
  </motion.div>
);

const ImageGridSection = () => {
  return (
    <motion.div
      className="container-fluid p-0 my-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="row gx-1 gy-1">

        {/* Column 1: 2 stacked images */}
        <div className="col-6 col-md-3 d-flex flex-column gap-1">
          <ImageCard img={images[0]} />
          <ImageCard img={images[1]} />
        </div>

        {/* Column 2: 1 image */}
        <div className="col-6 col-md-3">
          <ImageCard img={images[2]} />
        </div>

        {/* Column 3: 2 stacked images */}
        <div className="col-6 col-md-3 d-flex flex-column gap-1">
          <ImageCard img={images[3]} />
          <ImageCard img={images[4]} />
        </div>

        {/* Column 4: 1 image */}
        <div className="col-6 col-md-3">
          <ImageCard img={images[5]} />
        </div>

      </div>
    </motion.div>
  );
};

export default ImageGridSection;
