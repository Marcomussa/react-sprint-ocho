import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Discount(){

    const [discounts, setDiscount] = useState([])

    useEffect( () => {
        obtenerProdDiscount()
    }, [])

    const obtenerProdDiscount = async () => {
        const res = await fetch('/api/discounts')
        const data = await res.json()
        setDiscount(data)
    }

    return (
        <>
            <h3>Productos con Descuento:</h3>
            {
                discounts ?  
                discounts.map( (e,i) => {
                    return <div key={i} className='col-md-12 mb-4 contProdDetail'>
                    <div className="col-md-6">
                        <img src={e.image_url} alt="" style={{width: '100%'}}/>
                    </div>
                    <div className="col-md-6" style={{marginLeft: '20px'}}>
                        <p>Nombre: <b>{e.name}</b></p>
                        <p>Precio: $<b>{e.price}</b></p>
                        <h5>Descuento: {e.discount}%</h5>
                        <Link to={`/products/${e.id}`} className='btn btn-primary'>Detalle</Link>
                    </div>
                </div>
                })
                : <span>Cargando...</span>
            }            
        </>
    )
}

export default Discount