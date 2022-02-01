import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Title from '../Components/Title'

function ProductCard(props){

    const URL = '/api/products'

    const [product, setProduct] = useState([])
    const [length, setLength] = useState([])

    useEffect(() => {
        obtenerProducts()
    }, [])

    const obtenerProducts = async () => {
        const data = await fetch(URL)
        const res = await data.json()
        setProduct(res.products)
        setLength(res.count)
    }

    const style = {
        borderLeft: props.border,
        borderRadius: '5px',
        paddingLeft: '10px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return (
        <>
           <Title/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <Sidebar/>
                <div className="col-md-10">
                    <div style={style}>
                        <div>
                            <h3>Products:</h3>
                            <p className="cantidad">Cantidad: <b>{length}</b></p>
                        </div>
                        <div>
                            <i className="fas fa-laptop-code"></i>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <Link to='/products' className='mr-2'>List</Link>
                        <Link to='/products/cards'>Cards</Link>
                    </div>
                    <hr />
                    <h3 className='mb-3'>Cards:</h3>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {product.map( (e,i) => (
                        <div 
                            className='mb-4 contCardProducts'
                            key={i}>
                            <img src={e.image_url} alt="" />
                            <p>#{e.id}</p>
                            <p>{e.name}</p>
                            <p>{e.descripcion}</p>
                            <p className='priceCards'>${e.price}</p>
                            <p>${e.price - (e.price * 0.01 * e.discount)}</p>
                            <Link to={`/products/${e.id}`} className='btn btn-primary'>Detalle</Link>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard