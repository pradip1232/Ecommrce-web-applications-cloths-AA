// pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import '../components/assets/css/products.css';
import img from '../components/assets/img/download 1.png';
import img2 from '../components/assets/img/1 1 (1).png';
const Products = () => {

    const products = [
        {
            image: [img, img2],
            title: 'Cotton T-Shirt',
            description: 'Comfortable and eco-friendly.',
            price: '799'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: [img2, img],
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },

        // Add more...
    ];

    return (
        <div className="container product-page-container mx-auto pt-4 mt-4">
            <div className="flex flex-wrap -mx-2 row">
                {products.map((product, i) => (
                    <ProductCard key={i} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
