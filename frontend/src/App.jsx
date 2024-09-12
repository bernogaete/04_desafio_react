import React, { useState } from 'react';
import Footer from './components/Footer';
import './App.css';
import Pizza from './components/Pizza';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function App  () {
  const [currentView, setCurrentView] = useState('home');
  const total = 25000; 

  return (
    <div>
      <Navbar  setCurrentView={setCurrentView} total={total} />
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;

