import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ image, title, description, price, productID, addToCart }) => {
  const carouselId = `carousel-${title.replace(/\s+/g, '-')}`;
  const images = image;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 product-page-container">
      <div className="card  border-0">
        {/* Carousel with autoplay (uncomment interval for auto-slide) */}
        <div
          id={carouselId}
          className="carousel slide carousel-fade carouselId"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={img} className="d-block w-100" alt={`${title} ${index}`} />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>

        <div className="card-body text-center">
          {/* <Link to={`/product/${id}`} className="text-decoration-none text-dark"> */}
          <Link to={`/product-details`} className="text-decoration-none text-dark">
            <h6 className="card-title mb-1">{title}</h6>
          </Link>
          {/* <p className="card-text small text-muted mb-2">{description}</p> */}
          <div>
            <p className="fw-boldd ">₹{price}</p>

            <Link onClick={() =>
              addToCart({ productID, title, price, image: image[0] })
            }>
              <FaShoppingCart size={22} />
            </Link>
            {/* <button
              className="btn btn-dark btn-sm w-100"
              onClick={() =>
                addToCart({ productID, title, price, image: image[0] })
              }
            >
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
