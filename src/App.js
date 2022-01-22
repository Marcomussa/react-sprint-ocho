import React from 'react'
import Index from './Components/Index'
import User from './Components/User'
import Product from './Components/Product'

function App() {
  return (      
      <div className='container'>
        <Index/>
        <div className='row'>
          <div className='col-md-6'>
            <User/>
          </div>
          <div className='col-md-6'>
            <Product/>
          </div>
        </div>
      </div>
  )
}

export default App;
