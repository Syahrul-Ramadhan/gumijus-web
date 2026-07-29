import { useState } from "react";
import { motion } from "motion/react";
import React from 'react'

import productData from "../data/productData";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

import HeroProduct from "../components/product/HeroProduct";
import ProductHeader from "../components/product/ProductHeader";
import ProductGrid from "../components/product/ProductGrid";

function Product() {
  const [activeTab, setActiveTab] = useState("Produk Terlaris");

  const filteredProducts =
  activeTab === "Produk Terlaris"
    ? productData.filter(
        (item) => item.category === "Produk Terlaris"
      )
    : productData.filter(
        (item) => item.category === activeTab
      );

  return (
    <div className="overflow-hidden">
      <Navbar bgColor="bg-[#F4B54D]" />

      <HeroProduct />

      <ProductHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />

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

      <BackToTop
        bgColor="bg-[#F4B54D]"
        bgColorHover="bg-[#e6a740]"
      />

      <Footer bgColor="bg-[#F4B54D]" />
    </div>
  );
}

export default Product;