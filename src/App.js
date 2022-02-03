import React from 'react'
import './App.css'
import Index from './Components/Index'
import User from './Components/User'
import Product from './Components/Product'
import Category from './Components/Category'
import ProductCard from './Components/ProductCard'
import {Route, Routes} from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import CategoryDetail from './Components/CategoryDetail'

function App() {
  return (      
    <div className='container'>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/users' element={<User  border='5px solid #dc3545'/>}/>
        <Route path='/products' element={<Product border='5px solid #007bff'/>}/>
        <Route path='/products/cards' element={<ProductCard border='5px solid #007bff'/>}></Route>
        <Route path='/products/:id' element={<ProductDetail border='5px solid #007bff'/>}></Route>
        <Route path='/categories' element={<Category border='5px solid #28a745'/>}/>
        <Route path='/categories/:id' element={<CategoryDetail border='5px solid #28a745'/>}/>
      </Routes>
    </div>
  )
}

export default App;
