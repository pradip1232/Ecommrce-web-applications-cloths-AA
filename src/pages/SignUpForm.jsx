import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    mobile: "",
    state: "",
    country: "India",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d{0,10}$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleStateChange = (event, newValue) => {
    setFormData((prev) => ({
      ...prev,
      state: newValue || "",
    }));
    if (errors.state) {
      setErrors((prev) => ({ ...prev, state: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${key[0].toUpperCase() + key.slice(1)} is required`;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (formData.mobile && formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://yourapi.com/register",
        formData
      );
      alert("Registered successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 4 }}>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        SIGN IN / REGISTER
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
          backgroundColor: "#fafafa",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          variant="standard"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />

        {/* <Grid container spacing={2}> */}
        <Row>
          <Col md={6}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="standard" error={!!errors.gender}>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
                {errors.gender && (
                  <Typography variant="caption" color="error">
                    {errors.gender}
                  </Typography>
                )}
              </FormControl>
            </Grid>
          </Col>
          <Col md={6}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                label="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                error={!!errors.mobile}
                helperText={errors.mobile}
                fullWidth
              />
            </Grid>
          </Col>
        </Row>
        {/* </Grid> */}

        {/* <Grid container spacing={2}> */}
        <Row>
          <Col md={6}>
            {" "}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                options={indianStates}
                value={formData.state}
                onChange={handleStateChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="State"
                    error={!!errors.state}
                    helperText={errors.state}
                  />
                )}
              />
            </Grid>
          </Col>
          <Col md={6}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel>Country</InputLabel>
                <Select name="country" value={formData.country} disabled>
                  <MenuItem value="India">India</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Col>
        </Row>
        {/* </Grid> */}

        <TextField
          variant="standard"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          variant="standard"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          SIGN UP
        </Button>

        <Typography textAlign="center" sx={{ mt: 2 }}>
          Already have an account? <a href="/login">Log In</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpForm;
