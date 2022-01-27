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
            <div className='contenedorUsers'>
                <h4 className='mb-3'>Nombre - Apellido - Email - ID</h4>
                <hr />
                {
                    user.map((item, i) => (
                        <p key={i}>{item.name} - {item.surname} - {item.email} - #{item.id}</p>
                    ))
                }
            </div>
            </div>
            </div>
        </>
    )
}

export default User