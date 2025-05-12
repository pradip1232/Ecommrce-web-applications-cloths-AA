import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 cart-title">Shopping Cart</h2>

      <div className="row g-4">
        {/* Cart Table */}
        <div className="col-lg-8">
          <div className="table-responsive d-none d-md-block">
            <table className="table align-middle cart-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="text-muted fs-5">&times;</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={item.image} alt={item.title} className="me-2 cart-img" width="60" />
                          <span>{item.title}</span>
                        </div>
                      </td>
                      <td>₹{item.price}</td>
                      <td>
                        <div className="quantity-control">
                          <button className="btn btn-outline-secondary btn-sm">-</button>
                          <span className="mx-2">{item.quantity.toString().padStart(2, "0")}</span>
                          <button className="btn btn-outline-secondary btn-sm">+</button>
                        </div>
                      </td>
                      <td>₹{item.price * item.quantity}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">Your cart is empty.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Coupon Row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mt-4 gap-3">
            <input type="text" className="form-control coupon-input" placeholder="Coupon code" />
            <div className="d-flex gap-2">
              <button className="btn btn-dark">Apply Coupon Code</button>
              <button className="btn btn-outline-dark">Update Cart</button>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="border p-4 cart-summary">
            <h5 className="fw-semibold mb-3">Summary</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Discount</span>
                <span>10%</span>
              </li>
              <li className="d-flex justify-content-between">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </li>
              <hr />
              <li className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span>₹{total}</span>
              </li>
            </ul>
            <button className="btn btn-dark w-100 mt-3">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
