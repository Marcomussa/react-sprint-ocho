import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar(){
    return (
        <div className='col-md-2'>
            <p>Sidebar</p>
            <Link to='/'>Index</Link>
            <br />
            <Link to='/users'>Users</Link>
            <br />
            <Link to='/products'>Products</Link>
            <br />
            <Link to='/categories'>Categories</Link>
        </div>
    )
}

export default Sidebar