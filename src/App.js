import React from 'react'
import './App.css'
import Index from './Components/Index'
import User from './Components/User'
import Product from './Components/Product'
import Category from './Components/Category'
import ProductCard from './Components/ProductCard'
import {Route, Routes} from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'

function App() {
  return (      
    <div className='container'>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/users' element={<User  border='5px solid red'/>}/>
        <Route path='/products' element={<Product border='5px solid blue'/>}/>
        <Route path='/products/cards' element={<ProductCard border='5px solid blue'/>}></Route>
        <Route path='/products/:id' element={<ProductDetail border='5px solid blue'/>}></Route>
        <Route path='/categories' element={<Category border='5px solid green'/>}/>
      </Routes>
    </div>
  )
}

export default App;
