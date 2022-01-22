import React, {useState, useEffect} from 'react'

function Products(){

    const URL = '/apiProducts'

    const [product, setProduct] = useState([])
    const [productLength, setLength] = useState([])

    useEffect( () => {
        obtenerProducts()
    }, [])

    const obtenerProducts= async () => {
        const data = await fetch(URL)
        const products = await data.json()
        setProduct(products.products)
        setLength(products.count)
    }

    return (
        <>
            <h3>Products:</h3>
            <p>Cantidad: <b>{productLength}</b></p>
            <div className='contenedorProducts'>
                {
                    product.map((item, i) => (
                        <p key={i}>{item.id}) {item.name} - {item.description} - {item.price}</p>
                    ))
                }
            </div>
        </>
    )
}


export default Products

