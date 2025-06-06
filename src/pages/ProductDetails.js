import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap';
import img from '../components/assets/img/1 1 (1).png';




import ii1 from '../components/assets/new-img/AYVA IMAGES (58).webp';
import ii2 from '../components/assets/new-img/AYVA IMAGES (59).webp';
import ii3 from '../components/assets/new-img/AYVA IMAGES (56).webp';
import ii4 from '../components/assets/new-img/AYVA IMAGES (55).webp';

const ProductDetails = () => {
    const navigate = useNavigate();

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [qty, setQty] = useState(1);
    const [open, setOpen] = useState('');

    const product = {
        title: 'CLASSIC MAROON CREW NECK G TSHIRT',
        price: 1200,
        offerPrice: 799,
        colors: ['#800000', '#3A3B3C', '#003366'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        // image: 'https://via.placeholder.com/500x600.png?text=Product+Image',
        image: img,
    };

    const handleBuyNow = () => {
        if (!selectedColor || !selectedSize) {
            alert('Please select color and size');
            return;
        }

        const selectedProduct = {
            ...product,
            selectedColor,
            selectedSize,
            qty,
        };

        // You can also use context or redux — for now, using localStorage
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        navigate('/checkout');
    };








    const products = [
        {
            id: 1,
            title: 'CLASSIC BLACK SHIRT',
            price: '₹999',
            image: ii1,
        },
        {
            id: 2,
            title: 'CLASSIC WHITE SHIRT',
            price: '₹999',
            image: ii2,
        },
        {
            id: 3,
            title: 'CLASSIC BLUE SHIRT',
            price: '₹999',
            image: ii3,
        },
        {
            id: 4,
            title: 'CLASSIC WHITE SHIRT',
            price: '₹999',
            image: ii4,
        },
    ];

    return (
        <>
            <div className='product-details-categoyr-line container-fluid'>
                <span>
                    Men’s /  Clothing  /  Tshirt
                </span>
            </div>

            <div className="container py-4 product-details-page">
                <div className="row g-4 align-items-start">
                    <div className="col-md-6 text-left product-detail-page-left-img-cont">
                        <img src={product.image} alt="Product" className="img-fluidd " />
                    </div>

                    <div className="col-md-6">
                        <h5 className="fw-semibodld">{product.title}</h5>
                        <p className="h5 mb-1">₹{product.price} <small className="text-muted">(incl. all taxes)</small></p>
                        <p className="text-successssssss small mb-3">Limited Offer: ₹{product.offerPrice} (30% OFF)</p>

                        {/* Color Selection */}
                        <div className="mb-3">
                            <strong>Color:</strong>
                            <div className="d-flex gap-2 mt-2">
                                {product.colors.map((color, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedColor(color)}
                                        className={`border rounded-circle p-2`}
                                        style={{
                                            backgroundColor: color,
                                            width: '30px',
                                            height: '30px',
                                            borderRadius:'50%',
                                            border: selectedColor === color ? '2px solid black' : '1px solid #ccc',
                                        }}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-3">
                            <strong>Size:</strong>
                            <div className="d-flex gap-2 mt-2 flex-wrap">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`btn btn-sm ${selectedSize === size ? 'btn-dark text-white' : 'btn-outline-dark'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Add to Cart Row */}
                        <div className="row mb-3">
                            {/* Quantity Dropdown (25%) */}
                            <div className="col-3">
                                <label htmlFor="qty" className="form-label"><strong>Qty</strong></label>
                                <select
                                    id="qty"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className="form-select"
                                >
                                    {[1, 2, 3, 4, 5].map((val) => (
                                        <option key={val} value={val}>{val}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Add to Cart Button (75%) */}
                            <div className="col-9 d-flex align-items-end">
                                <button className="btn btn-dark w-100">ADD TO CART</button>
                            </div>
                        </div>

                        {/* Buy Now Button Row */}
                        <div className="row mb-4">
                            <div className="col-12">
                                <button className="btn btn-outline-dark w-100" onClick={handleBuyNow}>BUY NOW</button>
                            </div>
                        </div>


                        {/* Accordions */}
                        <Accordion activeKey={open} onSelect={(k) => setOpen(open === k ? '' : k)} flush>
                            <AccordionItem eventKey="0">
                                <AccordionHeader>Product Details</AccordionHeader>
                                <AccordionBody>Soft cotton fabric, crew neck, regular fit.</AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="1">
                                <AccordionHeader>Size & Fit</AccordionHeader>
                                <AccordionBody>Model is 6' and wears size M.</AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="2">
                                <AccordionHeader>Product Care</AccordionHeader>
                                <AccordionBody>Machine wash cold, do not bleach, tumble dry low.</AccordionBody>
                            </AccordionItem>
                            <AccordionItem eventKey="3">
                                <AccordionHeader>Product Sustainability</AccordionHeader>
                                <AccordionBody>Made with eco-friendly dyes and organic cotton.</AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className="container py-5 product-detail-page-yourmay">
                <h5 className="mb-4">YOU MAY ALSO LIKE</h5>
                <div className="row g-4">
                    {products.map(product => (
                        <div className="col-6 col-md-3" key={product.id}>
                            <div className="card position-relative border-0">
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                {/* <div className="card-heart">&#9825;</div> */}
                                <div className="card-body text-left p-0">
                                    <div className="card-title">{product.title}</div>
                                    <div className="card-price">{product.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
