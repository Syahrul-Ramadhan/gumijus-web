import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

// detail pages
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Outlet from "./pages/Outlet";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Product />} />
      <Route path="/outlet" element={<Outlet />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
