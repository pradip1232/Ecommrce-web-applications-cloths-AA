import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import img1 from '../assets/new-img/AYVA IMAGES (53).webp';
import img2 from '../assets/new-img/AYVA IMAGES (52).webp';
import img3 from '../assets/new-img/AYVA IMAGES (54).webp';
import img4 from '../assets/new-img/AYVA IMAGES (43).webp';
import img5 from '../assets/new-img/AYVA IMAGES (44).webp';
import img6 from '../assets/new-img/AYVA IMAGES (45).webp';

const products = [
  { title: "Men’s Oversize T-Shirts", img: img1 },
  { title: "Men’s Regular T-Shirts", img: img2 },
  { title: "Men’s Shirts", img: img3 },
  { title: "Tote Hand Bags", img: img4 },
  { title: "Sling Hand Bags", img: img5 },
  { title: "Women’s Wallet", img: img6 },
];

const ExploreCard = () => {
  return (
    <Container className="py-5 product-home-card2">
      <Typography variant="h5" align="center" gutterBottom>
        Explore Ayvva Men’s Collection
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((item, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Card sx={{ position: 'relative', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '8px', overflow: 'hidden', '&:hover .overlay': { opacity: 1 } }}>
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                sx={{ height: '100%', objectFit: 'cover' }}
              />
              <Box className="overlay" sx={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(51, 51, 51, 0.6)', color: 'white', display: 'flex',
                justifyContent: 'center', alignItems: 'center', opacity: 0,
                transition: 'opacity 0.3s ease', fontWeight: '600', fontSize: '1.2rem',
              }}>
                <Typography variant="h6">Shop Now</Typography>
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="body2">{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExploreCard;
