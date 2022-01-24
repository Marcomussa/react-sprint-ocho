import React, {useState, useEffect} from 'react'

function ProductDetail(props){

    const URL = '/apiProducts'

    const [product, setProduct] = useState([])

    let arr = [product[product.length - 1]]

    useEffect( () => {
        obtenerProducts()
    }, [])

    const obtenerProducts = async () => {
        const data = await fetch(URL)
        const products = await data.json()
        setProduct(products.products)
    }

    return (
        <>
            <h3>Ultimo Producto Agregado</h3>
           
        </>
    )
}

export default ProductDetail