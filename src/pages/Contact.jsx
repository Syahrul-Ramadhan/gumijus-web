import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import React from 'react'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { MapPin, Mail } from 'lucide-react';
import BackToTop from "../components/BackToTop";

function Contact() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <BackToTop />
      <Footer />
    </div>
  );
}

export default Contact;