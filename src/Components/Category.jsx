import React, {useState, useEffect} from 'react'

function Categories(){

    const URL = '/apiCategories'

    const [category, setCategory] = useState([])
    const [length, setLength] = useState([])

    useEffect( () => {
        obtenerCategories()
    }, [])

    const obtenerCategories = async () => {
        const categories = await fetch(URL)
        const data = await categories.json()
        setCategory(data.categories)
        setLength(data.count)
    }

    return (
        <>
            <h3>Categorias:</h3>
            <p>Cantidad: <b>{length}</b></p>
            {
                category.map((item, i) => (
                        <p key={i}>{item.id}) {item.name}</p>
                    ))
            }
        </>
    )
}

export default Categories