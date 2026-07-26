import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import React from 'react'
import BackToTop from "../components/BackToTop";

function Outlet() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <BackToTop />
      <Footer />
    </div>
  );
}

export default Outlet;