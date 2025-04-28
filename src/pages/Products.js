// pages/Products.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../components/assets/css/products.css';
import img from '../components/assets/img/download 1.png';
import img2 from '../components/assets/img/1 1 (1).png';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // Add product to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            // Prevent adding the same product multiple times
            const existingProduct = prevItems.find(item => item.productID === product.productID);
            if (existingProduct) {
                return prevItems; // Product already in cart, no action
            }
            return [...prevItems, product]; // Add new product to cart
        });
    };

    // Fetch product data from the PHP backend
    useEffect(() => {
        fetch('http://localhost/ayva/get_products.php')
            .then(response => response.json())
            .then(data => {
                const formattedProducts = data.map((product) => ({
                    productID: product.product_id,
                    title: product.name,
                    description: product.product_details,
                    price: String(product.selling_price),
                    image: [img, img2], // Example of static images (replace with dynamic if needed)
                }));
                setProducts(formattedProducts);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container product-page-container mx-auto pt-4 mt-4">
            <div className="flex flex-wrap -mx-2 row">
                {products.length > 0 ? (
                    products.map((product, i) => (
                        <ProductCard
                            key={i}
                            {...product}
                            addToCart={addToCart}
                        />
                    ))
                ) : (
                    <div className='text-center'>Loading products...</div> 
                )}
            </div>
        </div>
    );
};

export default Products;
