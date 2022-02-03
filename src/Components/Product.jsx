import React, {useState, useEffect} from 'react'
import Title from '../Components/Title'
import Sidebar from '../Components/Sidebar'
import {Link} from 'react-router-dom'

function Products(props){

    const URL_PRODUCTS = '/api/products'
    const URL_CATEGORY = '/api/categories'

    const [product, setProduct] = useState([])
    const [productLength, setLength] = useState([])
    const [category, setCategory] = useState([])
    const [tablaProducts, setTablaProducts] = useState([])
    const [busqueda, setBusqueda] = useState('')

    useEffect( () => {
        obtenerProducts()
        obtenerCategory()
    }, [])

    const obtenerProducts = async () => {
        const data = await fetch(URL_PRODUCTS)
        const products = await data.json()
        setProduct(products.products)
        setLength(products.count)
        setTablaProducts(products.products)
    }

    const obtenerCategory = async () => {
        const data = await fetch(URL_CATEGORY)
        const categories = await data.json()
        setCategory(categories.categories)
    }     

    const handleChange = (e) => {
        setBusqueda(e.target.value)
        filtar(e.target.value)
    }   

    const filtar = (terminoBusqueda) => {
        let resultadosBusqueda = tablaProducts.filter((elemento) => {
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
              return elemento
            }
          });
        setProduct(resultadosBusqueda)
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
                    <div className="col-md-10" style={{background: 'rgba(255,255,255,0.6)', padding: '10px'}}>
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
                            <Link to='/products' className='mr-2 mt-2 btn btn-primary'>List</Link>
                            <Link to='/products/cards' className='mt-2 btn btn-primary'>Cards</Link>
                        </div>
                        <hr />
                        <div className='mb-4 mt-4'>
                        <input 
                            type="text" 
                            className='form form-control' 
                            placeholder='Buscar Producto (Nombre)'
                            value={busqueda}
                            onChange={handleChange}/>
                        </div>
                        <div className='contenedorProducts mb-1' style={{display: 'flex'}}>
                            <div className="col-md-2" style={subStyles}>
                                <h4>ID</h4>
                            </div>
                            <div className='col-md-3' style={subStyles}>
                                <h4>Nombre</h4>
                            </div>
                            <div className="col-md-2" style={subStyles}>
                                <h4>Precio</h4> <span>(final)</span>
                            </div>
                            <div className="col-md-3" style={subStyles}>
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
                                            <div className="col-md-3" style={subStyles}>
                                                <p>{item.name}</p>
                                            </div>
                                            
                                            <div className="col-md-2" style={subStyles}>
                                                <p>${item.price - (item.price * 0.01 * item.discount)}</p>
                                            </div>
                                            <div className="col-md-3" style={subStyles}>
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

