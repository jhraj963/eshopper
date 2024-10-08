import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import 'font-awesome/css/font-awesome.min.css';
// import Slider from './include/slider';


function AdminLayout({ children }) {
  return (
    <div id="app">
      <Header />
      {/* <Slider /> */}
      <Sidebar />
      <div id="main">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout