import React from 'react'
import './App.css'
import Index from './Components/Index'
import User from './Components/User'
import Product from './Components/Product'
import Category from './Components/Category'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (      
    <div className='container'>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/users' element={<User  border='5px solid red'/>}/>
        <Route path='/products' element={<Product border='5px solid blue'/>}/>
        <Route path='/categories' element={<Category border='5px solid green'/>}/>
      </Routes>
    </div>
  )
}

export default App;
