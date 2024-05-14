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
import ShoppingCart from "./components/Directors/ShoppingCart";
import data from "./data.json";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddProduct(product) {
    const productExist = data.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id == product.id
            ? {
                ...productExist,
                quantity: productExist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  console.log(cartItems);
  return (
    <div>
      <div>
        <Header cartItems={cartItems} />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/:products" element={<Products />}></Route>

          <Route
            path="/:products/:slug"
            element={<SingleProduct handleAddProduct={handleAddProduct} />}
          ></Route>
        </Routes>
        <div className="px-[24px]">
          <ShopProducts />
          <WebDescription />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
