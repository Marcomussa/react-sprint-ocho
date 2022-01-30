import React, { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import Title from '../Components/Title'
import Sidebar from '../Components/Sidebar'

function ProductDetail(props){
    const URL = '/api/products'
    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [productLength, setLength] = useState([])

    useEffect(() => {
        obtenerProduct()
    }, [])

    const obtenerProduct = async () => {
        const data = await fetch(URL)
        const products = await data.json()
        setProduct(products.products)
        setLength(products.count)
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
                                <p className="cantidad">Cantidad: <b>{productLength}</b></p>
                            </div>
                            <div>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                </div>
                    <div className='mb-3'>
                        <Link to='/products' className='mr-2'>List</Link>
                        <Link to='/products/cards'>Cards</Link>
                    </div>
                <hr />
                {
                    product.map( (e,i) => {
                        if(e.id === Number(id)){
                            return <div key={i}>
                                <h3>Detail: #{e.id}</h3>
                                <h5>{e.name}</h5>
                                <h5>{e.description}</h5>
                            </div>
                        } 
                    })
                }
                </div>
                </div>
        </>
    )
}

export default ProductDetail