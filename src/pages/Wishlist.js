import React from "react";

const wishlistItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/80",
    title: "Blue T-shirt",
    price: "₹1,200",
    inStock: true,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/80",
    title: "Green T-shirt",
    price: "₹1,200",
    inStock: false,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/80",
    title: "Yellow T-shirt",
    price: "₹1,200",
    inStock: true,
  },
];

const Wishlist = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center wishlist-title mb-4">Wishlist</h2>
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
                <td className="fs-5 text-muted">&times;</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                    <img src={item.image} alt={item.title} className="wishlist-img mb-2" />
                    <span className="fw-medium">{item.title}</span>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <span className={item.inStock ? "text-success fw-semibold" : "text-danger fw-semibold"}>
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td>
                  <button
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

      {/* You can add mobile version here if needed */}
    </div>
  );
};

export default Wishlist;
