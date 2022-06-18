import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/register" element={<Register/>} exact />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
