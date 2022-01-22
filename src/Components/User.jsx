import React, {useEffect, useState} from 'react'

function User(){

    const URL = '/apiUsers'

    const [user, setUser] = useState([])

    useEffect( () => {
        obtenerUsers()
    }, [])

    const obtenerUsers = async () => {
        const data = await fetch(URL)
        const users = await data.json()
        setUser(users)
    }

    return (
        <>
            <h3>Users:</h3>
            <ul>
                {
                    user.map((item, i) => (
                        <p key={i}>{item.id}) {item.name} - {item.surname} - {item.email}</p>
                    ))
                }
            </ul>
        </>
    )
}

export default User