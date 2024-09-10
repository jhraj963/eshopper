import * as React from 'react';
import Shop from './pages/Shop';
import AllProducts from './pages/AllProducts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
