import React, {useEffect, useState} from 'react'

function User(){

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
            <h3>Users:</h3>
            <p className="cantidad">Cantidad: <b>{userLength}</b></p>
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