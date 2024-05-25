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
import CartStorage from "./components/CartStorage";
import Checkout from "./pages/Checkout";
import { useLocation } from "react-router";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItmQuant, setCartItmQuant] = useState(1);

  function handleRemoveAll() {
    setCartItems([]);
    setCartItmQuant(1);
  }

  function handleRemoveProduct(product) {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  }
  function handleAddProduct(product) {
    const productExist = cartItems.find((item) => item.id === product.id);

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
  const [cartActive, setCartActive] = useState(false);

  function handleCartActive(isActive) {
    setCartActive(!isActive);
  }
  const location = useLocation();
  return (
    <div>
      <div>
        <Header
          cartActive={cartActive}
          handleCartActive={handleCartActive}
          cartItems={cartItems}
        />
        {cartActive && (
          <CartStorage
            cartItems={cartItems}
            handleRemoveAll={handleRemoveAll}
            handleAddProduct={handleAddProduct}
            cartItmQuant={cartItmQuant}
            handleRemoveProduct={handleRemoveProduct}
            cartActive={cartActive}
            handleCartActive={handleCartActive}
          />
        )}
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/:products" element={<Products />} />

          <Route
            path="/:products/:slug"
            element={<SingleProduct handleAddProduct={handleAddProduct} />}
          />

          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          />
        </Routes>
        <div className=" ">
          {location.pathname !== "/checkout" && <WebDescription s />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
