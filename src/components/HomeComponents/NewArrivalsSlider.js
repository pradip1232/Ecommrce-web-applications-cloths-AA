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
import { Container, Row } from 'react-bootstrap';

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
        <Container fluid className="newarrivels-card-slider">
            <Row>
                <div className="slider-wrapper">
                    <div className="slider-container" ref={sliderRef}>
                        {fullData.map((item, index) => (
                            <Card key={index} className="slider-card">
                                {item.isHeading ? (
                                    <CardContent className="text-center">
                                        <Typography variant="h6">NEW ARRIVALS</Typography>
                                    </CardContent>
                                ) : (
                                    <>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            style={{
                                                height: 180,
                                                width: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <CardContent className="text-center">
                                            <Typography variant="body2">{item.title}</Typography>
                                            {item.showButton && (
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    style={{ marginTop: '10px' }}
                                                >
                                                    View Product
                                                </Button>
                                            )}
                                        </CardContent>
                                    </>
                                )}
                            </Card>
                        ))}
                    </div>

                    {!isMobile && (
                        <IconButton className="slider-arrow" onClick={handleRightClick}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    )}
                </div>
            </Row>
        </Container>
    );
};

export default NewArrivalsSlider;
