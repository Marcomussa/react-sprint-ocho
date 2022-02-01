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
                            return <div key={i} className='col-md-12 mb-4 contProdDetail'>
                            <div className="col-md-6">
                                <img src={e.image_url} alt="" style={{width: '100%'}}/>
                            </div>
                            <div className="col-md-6" style={{marginLeft: '20px'}}>
                                <p>ID: <b>#{e.id}</b></p>
                                <p>Nombre: <b>{e.name}</b></p>
                                <p>Descripcion: <b>{e.description}</b></p>
                                <p>Creacion: <b>{e.createdAt.slice(0,10)}</b></p>
                                <p>Precio: <b>${e.price}</b></p>
                                <p>Descuento: <b>{e.discount}%</b></p>
                                <p>Precio Final: <b>${e.price - (e.price * 0.01 * e.discount)}</b></p>
                            </div>
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