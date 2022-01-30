import React, {useState, useEffect} from 'react'
import Title from '../Components/Title'
import Sidebar from '../Components/Sidebar'
import LastProduct from './LastProduct'
import {Link} from 'react-router-dom'

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

    const subStyles = {
        borderRight: '2px solid black',
        textAlign: 'center',
        borderLeft: '1px solid black'
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
                        <div>
                            <LastProduct/>
                        </div>
                        <h3>List</h3>
                        <div className='contenedorProducts mb-1' style={{display: 'flex'}}>
                            <div className="col-md-2" style={subStyles}>
                                <h4>ID</h4>
                            </div>
                            <div className='col-md-2' style={subStyles}>
                                <h4>Nombre</h4>
                            </div>
                            <div className="col-md-2" style={subStyles}>
                                <h4>Descripcion</h4>
                            </div>
                            <div className="col-md-2" style={subStyles}>
                                <h4>Precio</h4> <span>(final)</span>
                            </div>
                            <div className="col-md-2" style={subStyles}>
                                <h4>Categoria</h4>
                            </div>
                            <div className="col-md-2" style={subStyles}>
                                <h4>Creacion:</h4>
                            </div>
                        </div> 
                            {
                                product ?
                                <div className='contenedorProducts mb-5'>
                                {
                                    product.map((item, i) => (
                                        <div key={i} style={{display: 'flex'}}>
                                            <div className="col-md-2" style={subStyles}>
                                                <p>{item.id}</p>
                                            </div>
                                            <div className="col-md-2" style={subStyles}>
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="col-md-2" style={subStyles}>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="col-md-2" style={subStyles}>
                                                <p>${item.price - (item.price * 0.01 * item.discount)}</p>
                                            </div>
                                            <div className="col-md-2" style={subStyles}>
                                            <p>{
                                                category ? 
                                                category.map((category, i) => {
                                                    if(category.id === item.category_id){
                                                        return <span key={i}>{category.name}</span>
                                                    }})
                                                : console.log(0)
                                            } </p> 
                                            </div>
                                            <div className="col-md-2" style={subStyles}>
                                                <p>{item.createdAt.slice(0,10)}</p>
                                            </div>
                                        </div>    
                                    ))
                                }  
                            </div>
                                : <span>Cargando...</span>
                            }
                    </div>
                </div>
            </>
    )
}


export default Products

