import React, {useState, useEffect} from 'react'

function Products(){

    const URL = '/apiProducts'

    const [products, setProduct] = useState([])

    useEffect( () => {
        obtenerProducts()
    }, [])

    const obtenerProducts= async () => {
        const data = await fetch(URL)
        const products = await data.json()
        setProduct(products)
    }

    return (
        <>
            <h3>Products:</h3>
            <ul>
                {
                    products.map((item, i) => (
                        <p key={i}>{item.id}) {item.name} - {item.description} - {item.price}</p>
                    ))
                }
            </ul>
        </>
    )
}


export default Products

