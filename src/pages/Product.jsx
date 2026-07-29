import { useState } from "react";

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

      {/* nanti ProductGrid di sini */}
      <ProductGrid products={filteredProducts} />

      {/* Decoration */}
      <BackToTop
        bgColor="bg-[#F4B54D]"
        bgColorHover="bg-[#e6a740]"
      />

      <Footer bgColor="bg-[#F4B54D]" />
    </div>
  );
}

export default Product;