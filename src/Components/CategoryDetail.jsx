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
            <div className="col-md-10">
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
                <div>
                    {
                        product.map( (e,i) => {
                            if(e.category_id === Number(id)){
                                return <div key={i}>
                                    <p>{e.id}</p>
                                    <p>{e.name}</p>
                                    <hr />
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