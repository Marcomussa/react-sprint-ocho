import React, {useState, useEffect} from 'react'

function Products(props){

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
            <div style={{
                borderLeft: props.border,
                borderRadius: '5px',
                paddingLeft: '10px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <h3>Products:</h3>
                    <p className="cantidad">Cantidad: <b>{productLength}</b></p>
                </div>
                <div>
                    <i class="fas fa-laptop-code"></i>
                </div>
            </div>
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

