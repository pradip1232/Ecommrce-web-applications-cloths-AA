// TestimonialSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import i1 from '../assets/new-img/AYVA IMAGES (68).webp';
import i2 from '../assets/new-img/AYVA IMAGES (47).webp';

const testimonials = [
    {
        id: 1,
        text: "Absolutely in love with my AVYVA sling! It's compact yet fits all my essentials, and the design gets me compliments every time.",
        author: 'Meghna S, Mumbai',
        location: 'Mumbai',
        image: i1,
    },
    {
        id: 2,
        text: "The fit is just perfect — oversized but not sloppy. AVYVA nailed the balance between streetwear and premium casual.",
        author: 'Arjun M',
        location: 'Chandigarh',
        image: i2,
    },
    // {
    //     id: 3,
    //     text: "The fit is just perfect — oversized but not sloppy. AVYVA nailed the balance between streetwear and premium casual.",
    //     author: 'Arjun M',
    //     location: 'Chandigarh',
    //     image: 'https://via.placeholder.com/300x400?text=Model+Image',
    // },
    // {
    //     id: 4,
    //     text: "The fit is just perfect — oversized but not sloppy. AVYVA nailed the balance between streetwear and premium casual.",
    //     author: 'Arjun M',
    //     location: 'Chandigarh',
    //     image: 'https://via.placeholder.com/300x400?text=Model+Image',
    // },
];

const TestimonialSlider = () => {
    return (
        <div className="container py-5">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                }}
                loop={true}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="testimonial-slide d-flex flex-column flex-md-row">
                            {/* Text Card */}
                            <div className="testimonial-card p-4">
                                <h6 className="text-muted mb-2">WHAT THEY SAY ?</h6>
                                <div className="text-warning mb-2">
                                    ★★★★★
                                </div>
                                <p>{item.text}</p>
                                <h5 className="mt-3 mb-0">{item.author}</h5>
                                <small>{item.location}</small>
                            </div>

                            {/* Image Card */}
                            <div className="testimonial-img">
                                <img src={item.image} alt={item.author} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
