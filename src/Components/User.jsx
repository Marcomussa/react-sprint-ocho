import React, {useEffect, useState} from 'react'

function User(props){

    const URL = '/apiUsers'

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
                    <i class="fas fa-user"></i>
                </div>
            </div>
            <div className='contenedorUsers'>
                {
                    user.map((item, i) => (
                        <p key={i}>{item.id}) {item.name} - {item.surname} - {item.email}</p>
                    ))
                }
            </div>
        </>
    )
}

export default User