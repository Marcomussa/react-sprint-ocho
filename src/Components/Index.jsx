import React, {useEffect, useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Title from '../Components/Title'
import LastProduct from './LastProduct'
import Discount from './Discount'

function Index(){
    const URL_PRODUCTS = '/api/products'
    const URL_CATEGORIES = '/api/categories'
    const URL_USERS = '/api/users'

    const [productLength, setProductLength] = useState([])
    const [categoryLength, setCategoryLength] = useState([])
    const [usersLength, setUsersLength] = useState([])

    useEffect( () => {
        obtenerLength()
    }, [])

    const obtenerLength = async () => {
        const dataProducts = await fetch(URL_PRODUCTS)
        const resProducts = await dataProducts.json()
        setProductLength(resProducts.count)

        const dataCategories = await fetch(URL_CATEGORIES)
        const resCategories = await dataCategories.json()
        setCategoryLength(resCategories.count)

        const dataUsers = await fetch(URL_USERS)
        const resUsers = await dataUsers.json()
        setUsersLength(resUsers.count)
    }
    
    return (
       <>
        <Title/>
         <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Sidebar/>
            <div className="col-md-10" style={{ background: 'rgba(255,255,255,0.6)', padding: '10px'}}>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '20px'}}>
                <div style={
                    {
                        borderLeft: '5px solid #007bff',
                        borderRadius: '5px',
                        paddingLeft: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '31%'
                    }
                }>
                    <div>
                        <h3>Products</h3>
                        <p className="cantidad">Cantidad: <b>{productLength}</b></p>
                    </div>
                    <div>
                        <i className="fas fa-laptop-code"></i>
                    </div>
                </div>

                <div style={
                    {
                        borderLeft: '5px solid #dc3545',
                        borderRadius: '5px',
                        paddingLeft: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '31%'
                    }
                }>
                    <div>
                        <h3>Users</h3>
                        <p className="cantidad">Cantidad: <b>{usersLength}</b></p>
                    </div>
                    <div>
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <div style={
                    {
                        borderLeft: '5px solid #28a745',
                        borderRadius: '5px',
                        paddingLeft: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '31%'
                    }
                }>
                    <div>
                        <h3>Categories</h3>
                        <p className="cantidad">Cantidad: <b>{categoryLength}</b></p>
                    </div>
                    <div>
                        <i className="fas fa-mouse-pointer"></i>
                    </div>
                </div>
                </div>
                <hr />
                <LastProduct/>
                <hr />
                <Discount/>
            </div>
        </div>
       </>
    )
}

export default Index