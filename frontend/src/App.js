import './App.css';
import Nav from './Nav'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <h2>Shopping Cart Dashboard</h2>
      </BrowserRouter>
    </div>
  );
}
export default App;


