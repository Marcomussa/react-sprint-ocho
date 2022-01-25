import React, {useState, useEffect} from 'react'

function Products(props){

    const URL_PRODUCTS = '/apiProducts'
    const URL_CATEGORY = '/apiCategories'

    const [product, setProduct] = useState([])
    const [productLength, setLength] = useState([])
    const [category, setCategory] = useState([])

    useEffect( () => {
        obtenerProducts()
        obtenerCategory()
    }, [])

    const obtenerProducts = async () => {
        const data = await fetch(URL_PRODUCTS)
        const products = await data.json()
        setProduct(products.products)
        setLength(products.count)
    }

    const obtenerCategory = async () => {
        const data = await fetch(URL_CATEGORY)
        const categories = await data.json()
        setCategory(categories.categories)
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
                    <i className="fas fa-laptop-code"></i>
                </div>
            </div>
            <div className='contenedorProducts'>
                {
                    product.map((item, i) => (
                        <p key={i}>{item.name} - {item.description} - {item.price} - #{item.id} - {
                            category ? 
                            category.map((category, i) => {
                                if(category.id === 2){
                                    console.log(category)
                                }
                            })
                        : console.log(0)
                        }</p>
                    ))
                } 
               
            </div>
        </>
    )
}


export default Products

