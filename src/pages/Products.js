import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../components/assets/css/products.css';
import img from '../components/assets/img/download 1.png';
import img2 from '../components/assets/img/1 1 (1).png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    const handleAddToCart = ({ productID, title, price, image }) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        const index = existingCart.findIndex(item => item.productID === productID);
        if (index > -1) {
            existingCart[index].quantity += 1;
        } else {
            existingCart.push({ productID, title, price, image, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(existingCart));
        window.dispatchEvent(new Event('storage'));

        toast.success(`${title} added to your cart`, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
        });
    };

    useEffect(() => {
        fetch('http://localhost/ayva/get_products.php')
            .then(response => response.json())
            .then(data => {
                const formattedProducts = data.map((product) => ({
                    productID: product.product_id,
                    title: product.name,
                    description: product.product_details,
                    price: String(product.selling_price),
                    image: [img, img2], // Replace with dynamic image if available
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
                            handleAddToCart={handleAddToCart}
                        />
                    ))
                ) : (
                    <div className='text-center'>Loading products...
                        <br />
                        <p>Please Wait...</p>
                    </div>
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default Products;
