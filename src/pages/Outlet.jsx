import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import React from 'react'
import BackToTop from "../components/BackToTop";
import HeroOutlet from "../components/outlet/HeroOutlet";
import OutletList from "../components/outlet/OutletList";

function Outlet() {
  return (
    <div className="overflow-hidden">
      <Navbar bgColor="bg-[#B8272C]" />
      <HeroOutlet />
      
      <OutletList />
      {/* Decoration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }} 
        className="flex justify-center">
        <img src="/icons/decoration.svg" alt="decoration" className="w-25 md:w-35 2xl:w-45 max-w-md" />
      </motion.div>
      <BackToTop bgColor="bg-[#B8272C]" bgColorHover="bg-[#9a1f24]" />
      <Footer bgColor="bg-[#B8272C]" />
    </div>
  );
}

export default Outlet;