import React from 'react'
import './App.css'
import Index from './Components/Index'
import User from './Components/User'
import Product from './Components/Product'
import Category from './Components/Category'

console.log(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)

function App() {
  return (      
    <>
      <div className="container">
        <Index/>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <User
              border='5px solid red'
            />
          </div>
          <div className='col-md-4'>
            <Product
              border='5px solid blue'
            />
          </div>
          <div className='col-md-4'>
            <Category
              border='5px solid green'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
