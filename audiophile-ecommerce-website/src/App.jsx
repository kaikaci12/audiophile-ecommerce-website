import { useState } from "react";
import Header from "./components/Header";
import HomeComponent from "./pages/Home";
import "./App.css";
import Headphones from "./pages/Headphones";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/:products" element={<Headphones />}></Route>
      </Routes>
    </div>
  );
}

export default App;
