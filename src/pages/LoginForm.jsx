import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("https://yourapi.com/login", formData);
      console.log("Login Success:", response.data);
      alert("Login successful!");
      // Redirect or save token/session logic here
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        LOGIN
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        {/* Email */}
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        {/* Password */}
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        {/* Submit */}
        <Box mt={3} textAlign="center">
          <Button
            type="submit"
            variant="contained"
            // color="primary"
            sx={{
              width: "200px",
              background: "black",
              color: "white",
            }}
          >
            LOG IN
          </Button>
          <Typography mt={2}>
            Don't have an account? <a href="/sign-up">Register Here</a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
