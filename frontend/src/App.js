import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/register/Register";
import AddProducts from "./components/addProducts/AddProducts";
import ProductDetail from "./components/productDetail/ProductDetail";
import UpdateProduct from "./components/updateProduct/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/addproducts" element={<AddProducts />} exact />
          <Route path="/:id/" element={<ProductDetail />} exact />
          <Route path="/:id/update" element={<UpdateProduct />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
