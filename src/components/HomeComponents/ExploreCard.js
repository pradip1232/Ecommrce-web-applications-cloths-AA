import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaShoppingCart } from 'react-icons/fa';

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

const ExploreCard = () => {
  return (
    <div className="container py-5 product-home-card2">
      <h5 className="text-center mb-4">Explore Ayvva Men’s Collection</h5>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {products.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="product-card">
              <div className="image-wrapper">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid"
                />
                <div className="overlay">
                  <FaShoppingCart size={24} />
                  <span className="shop-text">Shop Now</span>
                </div>
              </div>
              <div className="text-center p-2">
                <small className="fw-semiboldd text-black">{item.title}</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx="true">{`

      .swiper-wrapper 
      {
      margin-bottom:24px;
      }
        .product-card {
          height: 100%;
          border-radius: 0;
          overflow: hidden;
        }
        .image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4; /* Ensures consistent height-to-width ratio */
          overflow: hidden;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(51, 51, 51, 0.6);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: opacity 0.3s ease;
          gap: 10px;
        }
        .product-card:hover .overlay {
          opacity: 1;
        }
        .shop-text {
          font-size: 1rem;
        }
        .swiper-pagination-bullets {
          margin-top: 30px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ExploreCard;
