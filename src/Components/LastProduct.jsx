import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function ProductDetail(props){

    const URL = '/api/lastProduct'

    const [product, setProduct] = useState('')

    let arr = [product[0]]

    useEffect( () => {
        obtenerProducts()
    }, [])

    const obtenerProducts = async () => {
        const data = await fetch(URL)
        const products = await data.json()
        setProduct(products)
    }

    return (
        <>
            <div>
            <h3 className='mb-3'>Ultimo Producto Agregado:</h3>
            {
                product ? 
                arr.map((e,i) => (
                    <div key={i} className='col-md-12 mb-4 contProdDetail'>
                        <div className="col-md-6">
                            <img src={e.image_url} alt="" style={{width: '100%'}}/>
                        </div>
                        <div className="col-md-6" style={{marginLeft: '20px'}}>
                            <p>Nombre: <b>{e.name}</b></p>
                            <p>Precio: $<b>{e.price}</b></p>
                            <Link to={`/products/${e.id}`} className='btn btn-primary'>Detalle</Link>
                        </div>
                    </div>
                ))
                : <span>Cargando...</span>
            }
            </div>
        </>
    )
}

export default ProductDetail