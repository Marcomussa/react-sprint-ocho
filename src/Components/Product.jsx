import React, {useState, useEffect} from 'react'
import Title from '../Components/Title'
import Sidebar from '../Components/Sidebar'
import ProductDetail from '../Components/ProductDetail'

function Products(props){

    const URL_PRODUCTS = '/api/products'
    const URL_CATEGORY = '/api/categories'

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
                    <div className="col-md-9">
                        <div style={style}>
                            <div>
                                <h3>Products:</h3>
                                <p className="cantidad">Cantidad: <b>{productLength}</b></p>
                            </div>
                            <div>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                        </div>
                        <div className='contenedorProducts mb-5'>
                            <h6 className='mb-3'>Nombre - Descripcion - Precio - ID - Categoria</h6>
                                <hr />
                                {
                                    product.map((item, i) => (
                                        <p key={i}>{item.name} - {item.description} - ${item.price} - #{item.id} - {
                                        category ? 
                                        category.map((category, i) => {
                                            if(category.id === item.category_id){
                                                return <span key={i}>{category.name}</span>
                                            }})
                                        : console.log(0)
                                    } </p> ))
                                }  
                        </div>
                        <div>
                            <ProductDetail/>
                        </div>
                    </div>
                </div>
            </>
    )
}


export default Products

