// components/ProductCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{title}</h6>
          <p className="card-text small text-muted">{description}</p>
          <div className="mt-auto">
            <p className="fw-bold mb-2">₹{price}</p>
            <button className="btn btn-dark btn-sm w-100">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
