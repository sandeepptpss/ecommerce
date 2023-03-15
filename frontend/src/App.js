import './App.css';
import Nav from './Nav'
import Footer from './footer';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav />
      <h2>Shopping Cart Dashboard</h2>

      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;


