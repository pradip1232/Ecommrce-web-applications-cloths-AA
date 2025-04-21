import React from 'react';

const Checkout = () => {
  const product = JSON.parse(localStorage.getItem('selectedProduct'));

  if (!product) return <p>No product selected</p>;

  return (
    <div className="container py-5">
      <h3>Checkout</h3>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h5>{product.title}</h5>
          <p><strong>Color:</strong> <span style={{ backgroundColor: product.selectedColor, padding: '0 10px' }}></span></p>
          <p><strong>Size:</strong> {product.selectedSize}</p>
          <p><strong>Qty:</strong> {product.qty}</p>
          <p><strong>Price:</strong> ₹{product.offerPrice * product.qty}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
