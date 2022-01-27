import React, {useEffect, useState} from 'react'
import Title from '../Components/Title'
import Sidebar from '../Components/Sidebar'

function User(props){

    const URL = '/api/users'

    const [user, setUser] = useState([])
    const [userLength, setLength] = useState([])

    useEffect( () => {
        obtenerUsers()
    }, [])

    const obtenerUsers = async () => {
        const data = await fetch(URL)
        const users = await data.json()
        setUser(users.users)
        setLength(users.count)
    }

    return (
        <>  
            <Title/>
            <div style={{display: 'flex'}}>
            <Sidebar/>
            <div className='col-md-10'>
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
                    <h3>Users:</h3>
                    <p className="cantidad">Cantidad: <b>{userLength}</b></p>
                </div>
                <div>
                    <i className="fas fa-user"></i>
                </div>
            </div>
            <div className='contenedorUsers mb-2' style={{display: 'flex'}}>
                <div className="col-md-3">
                    <h4>ID</h4>
                </div>
                <div className="col-md-3">
                    <h4>Nombre</h4>
                </div>
                <div className="col-md-3">
                    <h4>Apellido</h4>
                </div>
                <div className="col-md-3">
                    <h4>Email</h4>
                </div>
                <hr />
            </div>
            <div className='contenedorUsers'>
            {
                    user.map((item, i) => (
                        <div key={i} style={{display: 'flex'}}>
                            <div className="col-md-3">
                                <p>#{item.id}</p>
                            </div>
                            <div className="col-md-3">
                                <p>{item.name}</p>
                            </div>
                            <div className="col-md-3">
                                <p>{item.surname}</p>
                            </div>
                            <div className="col-md-3">
                                <p>{item.email}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
            </div>
        </>
    )
}

export default User