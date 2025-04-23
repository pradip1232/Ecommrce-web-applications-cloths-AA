import { useLocation } from 'react-router-dom';

const ShoppingCart = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // ✅ Safe fallback

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
