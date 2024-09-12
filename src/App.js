import * as React from 'react';
import Shop from './pages/Shop';
import AllProducts from './pages/AllProducts';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import BlogList from './pages/BlogList';
import BlogSingle from './pages/BlogSingle';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/BlogList" element={<BlogList />} />
        <Route path="/BlogSingle" element={<BlogSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
