import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';
import './App.css';

const App = () => {
  return (
    <div className='mulish-font'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
