import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import React from 'react'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { MapPin, Mail } from 'lucide-react';
import BackToTop from "../components/BackToTop";
import HeroOrder from "../components/order/HeroOrder";
import OrderIntro from "../components/order/OrderIntro";

function Order() {
  return (
    <div className="overflow-hidden">
      <Navbar bgColor="bg-[#871D59]" />
      <HeroOrder />
      <OrderIntro />
      <BackToTop bgColor="bg-[#871D59]" bgColorHover="bg-[#6a1540]" />
      <Footer bgColor="bg-[#871D59]" />
    </div>
  );
}

export default Order;