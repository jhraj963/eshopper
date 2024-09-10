import * as React from 'react';
import Shop from './pages/Shop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        {/* <Route path="/fahim" element={<Fahim />} />
        <Route path="/ramjan" element={<Ramjan />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
