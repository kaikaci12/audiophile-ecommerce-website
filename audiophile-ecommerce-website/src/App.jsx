import { useState } from "react";
import Header from "./components/Header";
import HomeComponent from "./pages/Home";
import "./App.css";
import Products from "./pages/Products";
import { Routes, Route } from "react-router";
import SingleProduct from "./pages/SingleProduct";
import ShopProducts from "./components/ShopProductsComponent";
import WebDescription from "./components/WebDescription";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/:products" element={<Products />}></Route>
        <Route path="/:products/:slug" element={<SingleProduct />}></Route>
      </Routes>
      <div className="px-[24px]">
        <ShopProducts />
        <WebDescription />
        <Footer />
      </div>
    </div>
  );
}

export default App;
