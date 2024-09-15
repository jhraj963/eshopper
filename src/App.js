import React, { useState, useEffect } from 'react';
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
import Protected from './components/protected';

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path={"/"} element={
          <Protected isSignedIn={isSignedIn} >
            <Shop />
          </Protected>
        } />
        <Route path={"/all-products"} element={
          <Protected isSignedIn={isSignedIn} >
            <AllProducts />
          </Protected>
        } />
        <Route path={"/contact-us"} element={
          <Protected isSignedIn={isSignedIn} >
            <Contact />
          </Protected>
        } />
        <Route path={"/Cart"} element={
          <Protected isSignedIn={isSignedIn} >
            <Cart />
          </Protected>
        } />
        <Route path={"/Checkout"} element={
          <Protected isSignedIn={isSignedIn} >
            <Checkout />
          </Protected>
        } />
        <Route path={"/BlogList"} element={
          <Protected isSignedIn={isSignedIn} >
            <BlogList />
          </Protected>
        } />
        <Route path={"/BlogSingle"} element={
          <Protected isSignedIn={isSignedIn} >
            <BlogSingle />
          </Protected>
        } />

        {/* <Route path="/" element={<Shop />} /> */}
        {/* <Route path="/all-products" element={<AllProducts />} /> */}
        {/* <Route path="/contact-us" element={<Contact />} /> */}
        {/* <Route path="/Cart" element={<Cart />} /> */}
        {/* <Route path="/Checkout" element={<Checkout />} /> */}
        {/* <Route path="/BlogList" element={<BlogList />} /> */}
        {/* <Route path="/BlogSingle" element={<BlogSingle />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
