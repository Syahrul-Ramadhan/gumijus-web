import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

// detail pages
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Outlet from "./pages/Outlet";
import Order from "./pages/Order";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Product />} />
      <Route path="/outlet" element={<Outlet />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;
