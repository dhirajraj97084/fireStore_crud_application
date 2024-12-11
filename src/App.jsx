import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import AddProduct from './pages/addProduct/AddProduct';
import UpdatePduct from './pages/updateProduct/UpdatePduct';
import MyState from './component/context/data/myState';

function App() {
  return (
    <div>
      <MyState>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addproduct' element={<AddProduct />}  />
            <Route path='/updateproduct' element={<UpdatePduct />} />
          </Routes>
        </Router>
      </MyState>

    </div>
  )
}

export default App
