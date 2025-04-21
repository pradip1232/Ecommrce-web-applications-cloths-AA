// pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import img from '../components/assets/img/download 1.png';
const Products = () => {
    const products = [
        {
            image: img,
            title: 'Cotton T-Shirt',
            description: 'Comfortable and eco-friendly.',
            price: '799'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        {
            image: img,
            title: 'Denim Jacket',
            description: 'Stylish and warm.',
            price: '1999'
        },
        // Add more...
    ];

    return (
        <div className="container mx-auto pt-4 mt-4">
            <div className="flex flex-wrap -mx-2 row">
                {products.map((product, i) => (
                    <ProductCard key={i} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
