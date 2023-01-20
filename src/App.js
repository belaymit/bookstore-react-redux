import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';
import Home from './pages/home/Home';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
