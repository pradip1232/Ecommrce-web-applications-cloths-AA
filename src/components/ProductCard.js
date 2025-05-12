import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const ProductCard = ({ image, title, description, price, productID, handleAddToCart }) => {
  const carouselId = `carousel-${title.replace(/\s+/g, '-')}`;
  const images = image;
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check if item is already in wishlist on mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.some(item => item.id === productID);
    setIsWishlisted(exists);
  }, [productID]);

  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.some(item => item.id === productID);

    let updatedWishlist;
    if (exists) {
      updatedWishlist = wishlist.filter(item => item.id !== productID);
      setIsWishlisted(false);
    } else {
      updatedWishlist = [
        ...wishlist,
        { id: productID, title, price, image: image[0] }
      ];
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    // Optional: Trigger a global update (e.g., update count in header)
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 product-page-container">
      <div className="card border-0 position-relative">
        {/* Heart Icon */}
        <div 
          onClick={handleWishlistToggle}
          style={{
            position: 'absolute',
            top: '8px',
            right: '10px',
            zIndex: 10,
            cursor: 'pointer',
            color: isWishlisted ? 'red' : '#ccc',
          }}
        >
          <FaHeart size={20} />
        </div>

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
          <Link to={`/product-details`} className="text-decoration-none text-dark">
            <h6 className="card-title mb-1">{title}</h6>
          </Link>
          <div>
            <p className="fw-boldd ">₹{price}</p>

            <Link onClick={() =>
              handleAddToCart({ productID, title, price, image: image[0] })
            }>
              <FaShoppingCart size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
