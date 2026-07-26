import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import React from 'react'
import BackToTop from "../components/BackToTop";
import HeroOutlet from "../components/outlet/HeroOutlet";

function Outlet() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroOutlet />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default Outlet;