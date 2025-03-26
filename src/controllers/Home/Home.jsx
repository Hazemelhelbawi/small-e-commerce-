import React from "react";
import Layout from "../Layout/Layout";
import Cart from "../ProductDetail/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import TotalProducts from "../WholeItem/TotalProducts";
import Navbar from "../Header/Navbar";
function Home() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/productDetails/:productId" element={<Cart />} />
        <Route path="/cart" element={<TotalProducts />} />
        <Route path="/" element={<Layout />} />
        <Route>404 Not Found!</Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default Home;
