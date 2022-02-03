import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar(){
    return (
        <div className='col-md-2' style={{
            background: 'rgba(255,255,255,0.6)', padding: '10px', textAlign: 'center'
        }}>
            <Link to='/'  className="btn btn-dark w-75" style={{
                marginBottom: '10px'
            }}>Index</Link>
            <br />
            <Link to='/products' className='btn btn-primary w-75' style={{
                marginBottom: '10px'
            }}>Products</Link>
            <br />
            <Link to='/users' className="btn btn-danger w-75" style={{
                marginBottom: '10px'
            }}>Users</Link>
            <br />
            <Link to='/categories' className="btn btn-success w-75">Categories</Link>
        </div>
    )
}

export default Sidebar