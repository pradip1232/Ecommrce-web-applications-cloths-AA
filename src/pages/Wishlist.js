import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  // Remove item from wishlist
  const handleRemove = (id) => {
    const updatedList = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    window.dispatchEvent(new Event("wishlistUpdated")); // Update icon count
  };

  // Add item to cart
  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...item, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.title} added to cart`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center wishlist-title mb-4">Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-muted">Your wishlist is empty.</p>
      ) : (
        <div className="table-responsive d-none d-sm-block">
          <table className="table align-middle wishlist-table">
            <thead className="table-light">
              <tr>
                <th scope="col" style={{ width: "50px" }}></th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Stock Status</th>
                <th scope="col" style={{ width: "150px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-sm text-danger fs-5 border-0 bg-transparent"
                      title="Remove"
                    >
                      &times;
                    </button>
                  </td>
                  <td>
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="wishlist-img mb-2"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                      <span className="fw-medium">{item.title}</span>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <span
                      className={
                        item.inStock
                          ? "text-success fw-semibold"
                          : "text-danger fw-semibold"
                      }
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`btn btn-sm w-100 ${
                        item.inStock ? "btn-dark" : "btn-secondary disabled"
                      }`}
                    >
                      ADD TO CART
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
