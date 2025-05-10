import React from 'react';
import '../components/assets/css/ContactUs.css';
import { Row, Col, Container } from 'react-bootstrap';
import {
    Typography, TextField, RadioGroup, FormControlLabel,
    Radio, Button, FormLabel, IconButton, Box
} from '@mui/material';
import { Phone, Email, LocationOn, Facebook, Instagram } from '@mui/icons-material';

const ContactUs = () => {
    return (
        <Container className="contact-section">
            <Row className='text-center justify-content-center mb-5 pb-3 text-contactpage'>
                <Col md={8} className='text-center'>
                    <h3>We’d Love to Hear From You</h3>
                    <h5>At AYVVA, your experience matters. Whether you have a question about our collections, need styling assistance, or want to collaborate —
                        <span>

                            we’re just a message away.
                        </span>
                    </h5>
                    <h6> Feel free to reach out and our team will get back to you within 24–48 hours.</h6>
                </Col>
            </Row>

            <Row className="gy-4">
                {/* Left Section */}
                <Col md={6}>
                    <Row className="d-flex flex-column" style={{ columnGap: '12px', rowGap: '10px' }}>
                        <Col md={11}>
                            <Box className="info-box">
                                <Typography variant="h6">Contact Information</Typography>
                                <Box className="info-item">
                                    <Phone className="info-icon" />
                                    <Typography variant="body2">
                                        +91-XXXXXXXXXX<br />
                                        (Mon–Fri, 10 AM to 6 PM IST)
                                    </Typography>
                                </Box>
                                <Box className="info-item">
                                    <Email className="info-icon" />
                                    <Typography variant="body2">
                                        support@ayyva.com<br />
                                        orders@ayyva.com
                                    </Typography>
                                </Box>
                                <Box className="info-item">
                                    <LocationOn className="info-icon" />
                                    <Typography variant="body2">
                                        AYYVA Headquarters<br />
                                        New Delhi, India - 110001
                                    </Typography>
                                </Box>
                            </Box>
                        </Col>
                        <Col md={11}>
                            <Box className="social-box">
                                <Typography variant="h6">Follow & Connect with Us</Typography>
                                <Typography variant="body2" className="social-text">
                                    Stay updated on latest drops, behind-the-scenes stories, and fashion inspo.
                                </Typography>
                                <Box className="social-icons">
                                    <IconButton><Facebook /></IconButton>
                                    <IconButton><Instagram /></IconButton>
                                </Box>
                            </Box>
                        </Col>
                    </Row>
                </Col>


                {/* Right Section (Form) */}
                <Col md={6}>
                    <Typography variant="h6" gutterBottom>Get in Touch</Typography>
                    <Row className="gy-3">
                        <Col sm={6}>
                            <TextField label="First Name" fullWidth variant="standard" />
                        </Col>
                        <Col sm={6}>
                            <TextField label="Last Name" fullWidth variant="standard" />
                        </Col>
                        <Col sm={6}>
                            <TextField label="Email" fullWidth variant="standard" />
                        </Col>
                        <Col sm={6}>
                            <TextField label="Phone Number" fullWidth variant="standard" />
                        </Col>
                        <Col sm={12}>
                            <FormLabel>Select Subject?</FormLabel>
                            <RadioGroup row>
                                {["Order Inquiry", "Product Info", "Collaboration", "Feedback", "Other"].map((label) => (
                                    <FormControlLabel key={label} value={label} control={<Radio />} label={label} />
                                ))}
                            </RadioGroup>
                        </Col>
                        <Col sm={12}>
                            <TextField label="Message" multiline rows={4} fullWidth variant="standard" />
                        </Col>
                        <Col sm={12}>
                            <Button variant="contained" className="submit-btn">Submit</Button>
                            <Typography variant="body2" className="thanks-text">
                                Thank you for reaching out to AYYVA. We’ll be in touch soon!
                            </Typography>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
