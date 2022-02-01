import React, {useState, useEffect} from 'react'
import Sidebar from '../Components/Sidebar'
import Title from '../Components/Title'
import {Link} from 'react-router-dom'

function Categories(props){

    const URL_CATEGORIES = '/api/categories'
    const URL_CANTIDAD_PRODS_CATEOGRY = '/api/prodsInCategory'

    const [category, setCategory] = useState([])
    const [cantProdsXCat, setCantProdsXCat] = useState([])
    const [length, setLength] = useState([])

    useEffect( () => {
        obtenerCategories()
        obtenerCantProdsXCat()
    }, [])

    const obtenerCategories = async () => {
        const categories = await fetch(URL_CATEGORIES)
        const data = await categories.json()
        setCategory(data.categories)
        setLength(data.count)
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
                    <h3>Categorias:</h3>
                    <p className="cantidad">Cantidad: <b>{length}</b></p>
                </div>
                <div>
                    <i className="fas fa-mouse-pointer"></i>
                </div>
            </div>
            <hr />
            <div className="contenedorCategories">
            {
                category.map((item, i) => (
                    <div 
                        className='subContenedorCategories'
                        key={i}>
                        <p>{item.id}) {item.name}</p>
                        {
                            cantProdsXCat.map((e,i) => {
                                if(e.id === item.id){
                                    return <div key={i}>
                                        <p>Cantidad: <b>{e.count}</b></p>
                                        <Link to={`/categories/${item.id}`} className='btn btn-success'>Listado</Link>
                                    </div>
                                }
                            })
                        }
                    </div>
                ))
            }
            </div>
            </div>
         </div>
     </>
    )
}

export default Categories