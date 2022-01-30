import React, {useState, useEffect} from 'react'
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
            <h3 className='mb-2'>Ultimo Producto Agregado:</h3>
            {
                product ? 
                arr.map((e,i) => (
                    <div key={i} className='col-md-12 mb-4 contProdDetail'>
                        <p>ID: <b>{e.id}</b></p>
                        <p>Nombre: <b>{e.name}</b></p>
                        <p>Descripcion: <b>{e.description}</b></p>
                        <p>Precio: <b>{e.price}</b></p>
                    </div>
                ))
                : <span>Cargando...</span>
            }
           
        </>
    )
}

export default ProductDetail