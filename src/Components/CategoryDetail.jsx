import React, {useState, useEffect} from 'react'
import Sidebar from '../Components/Sidebar'
import Title from '../Components/Title'
import {Link, useParams} from 'react-router-dom'

function CategoryDetail(props){
    const URL_PRODUCTS = '/api/products'
    const URL_CANTIDAD_PRODS_CATEOGRY = '/api/prodsInCategory'

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [cantProdsXCat, setCantProdsXCat] = useState([])

    useEffect( () => {
        obtenerProduct()
        obtenerCantProdsXCat()
    }, [])

    const obtenerProduct = async () => {
        const data = await fetch(URL_PRODUCTS)
        const res = await data.json()
        setProduct(res.products)
    }

    const obtenerCantProdsXCat = async () => {
        const categoriesXProds = await fetch(URL_CANTIDAD_PRODS_CATEOGRY)
        const data = await categoriesXProds.json()
        setCantProdsXCat(data)
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
            <div className="col-md-10" style={{ background: 'rgba(255,255,255,0.6)', padding: '10px'}}>
                <div style={style}>
                    <div>
                        {
                            cantProdsXCat.map( (e,i) => {
                                if(e.id === Number(id)){
                                    return <div>
                                        <h3>{e.name}</h3>
                                        <p className="cantidad">Cantidad: {e.count}<b></b></p>
                                 </div>
                                }
                                return ''
                                })
                            }    
                     
                    </div>
                    <div>
                        <i className="fas fa-mouse-pointer"></i>
                    </div>
                </div>
                <hr />
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {
                        cantProdsXCat.map(e => {
                            if(e.id === Number(id)){
                                if(e.count === 0){
                                    return <>
                                        <h3 style={{marginRight: '10px'}}>Categoria Vacia</h3>
                                        <i className="far fa-frown"></i>
                                    </>
                                }   
                            }
                        })
                    }
                    {
                        product.map( (e,i) => {
                            if(e.category_id === Number(id)){
                                return <div key={i} style={{width: '23%', marginRight: '20px', padding: '10px'}} className='card shadow'>
                                    <img src={e.image_url} alt="" className='card-img-top'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{e.name}</h5>
                                        <p className="card-text">{e.description}</p>
                                        <Link to={`/products/${e.id}`} className='btn btn-success'>Detalle</Link>
                                    </div>
                                </div>
                            }
                        })
                    }
                </div>
            </div>
         </div>
     </>
    )
}

export default CategoryDetail