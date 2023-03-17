import './custom.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/footer';
import SignUp from './components/SignUp';
import Product from './components/Product';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path="/" element={<h2><Product /></h2>}/>
    <Route path="/add" element={<h2>Add Product Component</h2>}/>
    <Route path="/delete" element={<h2>Delete Product Component</h2>}/>
    <Route path="/update" element={<h2>Update Component</h2>}/>
    <Route path="/profile" element={<h2>Profile Component</h2>}/>
    <Route path="/logout" element={<h2>Logout Component</h2>}/>
    <Route path="/signup" element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  );
}
export default App;


