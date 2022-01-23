import React, {useState, useEffect} from 'react'

function Categories(props){

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
                    <h3>Categorias:</h3>
                    <p className="cantidad">Cantidad: <b>{length}</b></p>
                </div>
                <div>
                    <i class="fas fa-mouse-pointer"></i>
                </div>
            </div>
            <div className="contenedorCategories">
            {
                category.map((item, i) => (
                    <div className='subContenedorCategories'>
                        <p key={i}>{item.id}) {item.name}</p>
                    </div>
                    ))
            }
            </div>
        </>
    )
}

export default Categories