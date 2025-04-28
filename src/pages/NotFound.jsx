import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "60vh" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-danger mb-4"
      >
        404
      </motion.h1>

      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-3"
      >
        Oops! Page not found.
      </motion.h4>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
