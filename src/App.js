import React from 'react'
import './App.css'
import Index from './Components/Index'
import User from './Components/User'
import Product from './Components/Product'
import Category from './Components/Category'

function App() {
  return (      
      <div className='container'>
        <Index/>
        <div className='row'>
          <div className='col-md-4'>
            <User/>
          </div>
          <div className='col-md-4'>
            <Product/>
          </div>
          <div className='col-md-4'>
            <Category/>
          </div>
        </div>
      </div>
  )
}

export default App;
