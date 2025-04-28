import React, { useRef } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    Box,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container } from 'react-bootstrap';

import i1 from '../assets/new-img/AYVA IMAGES (54).webp';
import i2 from '../assets/new-img/AYVA IMAGES (52).webp';
import i3 from '../assets/new-img/AYVA IMAGES (34).webp';

const productData = [
    { title: "Men's Oversize T-Shirts", image: i1, showButton: true },
    { title: "Tote Hand Bag", image: i2 },
    { title: "Men's Shirts", image: i3 },
    { title: "Tote Hand Bag", image: i2 },
    { title: "Tote Hand Bag", image: i2 },
    { title: "Tote Hand Bag", image: i2 },
    { title: "Sling Hand Bags", image: i3 },
];

const NewArrivalsSlider = () => {
    const sliderRef = useRef(null);
    const isMobile = useMediaQuery('(max-width: 576px)');

    const handleRightClick = () => {
        if (sliderRef.current) {
            const card = sliderRef.current.querySelector('.slider-card');
            if (card) {
                sliderRef.current.scrollBy({
                    left: card.offsetWidth + 16,
                    behavior: 'smooth',
                });
            }
        }
    };

    const fullData = [{ title: 'NEW ARRIVALS', isHeading: true }, ...productData];

    return (
        <Box position="relative" py={4}>
            <Container className="newarrivals-card-slider position-relative">
                <Box
                    className="slider-container d-flex overflow-hidden"
                    ref={sliderRef}
                    sx={{
                        gap: '16px',
                        scrollBehavior: 'smooth',
                        alignItems: 'stretch',
                    }}
                >
                    {fullData.map((item, index) => (
                        <Card
                            key={index}
                            className="slider-card flex-shrink-0"
                            sx={{
                                width: { xs: '160px', sm: 'calc(20% - 16px)' }, // 5 cards exactly
                                minWidth: { xs: '160px', sm: 'calc(20% - 16px)' },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: 'none',
                                p: 0,
                            }}
                        >
                            {item.isHeading ? (
                                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', top: '50%', left: '50%' }}>
                                    <Typography variant="h6" className='new-arrival-hading' >
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            ) : (
                                <>
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{
                                            height: 250,
                                            width: '100%',
                                            objectFit: 'cover',
                                            borderRadius: 0,
                                        }}
                                    />
                                    <CardContent sx={{ p: 1 }}>
                                        <Typography variant="body2" className='text-left'>{item.title}</Typography>
                                        {item.showButton && (
                                            <Button className='d-none'
                                                variant="contained"
                                                size="small"
                                                fullWidth
                                                sx={{ mt: 1 }}
                                            >
                                                View Product
                                            </Button>
                                        )}
                                    </CardContent>
                                </>
                            )}
                        </Card>
                    ))}
                </Box>
            </Container>

            {/* Right Arrow Button aligned to Container's Right */}
            <Container
                sx={{ position: 'relative' }}
            >
                <IconButton
                    className="slider-arrow"
                    onClick={handleRightClick}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '4%',
                        // right: { xs: '10px', md: 'calc((100% - 1140px) / 2 - 25px)' }, 
                        transform: 'translate(50%, -50%)',
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        zIndex: 10,
                        boxShadow: 1,
                    }}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </Container>
        </Box>
    );
};

export default NewArrivalsSlider;
