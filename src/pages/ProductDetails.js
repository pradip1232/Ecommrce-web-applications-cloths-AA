import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap';
import img from '../components/assets/img/1 1 (1).png';
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

    return (
        <div className="container py-4 product-details-page">
            <div className="row g-4 align-items-start">
                <div className="col-md-6 text-center">
                    <img src={product.image} alt="Product" className="img-fluid w-100" />
                </div>

                <div className="col-md-6">
                    <h5 className="fw-semibold">{product.title}</h5>
                    <p className="h5 mb-1">₹{product.price} <small className="text-muted">(incl. all taxes)</small></p>
                    <p className="text-success small mb-3">Limited Offer: ₹{product.offerPrice} (30% OFF)</p>

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

                    {/* Quantity */}
                    <div className="mb-3">
                        <label htmlFor="qty" className="form-label"><strong>Qty</strong></label>
                        <input
                            type="number"
                            id="qty"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            className="form-control w-25"
                            min="1"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-2 mb-4">
                        <button className="btn btn-dark w-50">ADD TO CART</button>
                        <button className="btn btn-outline-dark w-50" onClick={handleBuyNow}>BUY NOW</button>
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
    );
};

export default ProductDetails;
