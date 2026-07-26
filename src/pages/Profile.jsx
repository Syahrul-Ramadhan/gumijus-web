import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import React from 'react'
import BackToTop from "../components/BackToTop";
import HeroProfile from "../components/profile/HeroProfile";
import DetailProfile from "../components/profile/DetailProfile";

function Profile() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroProfile />
      <DetailProfile />
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
      <BackToTop />
      <Footer bgColor="bg-[#336940]" />
    </div>
  );
}

export default Profile;