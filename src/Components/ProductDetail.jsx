import React, {useState, useEffect} from 'react'

function ProductDetail(props){

    const URL = '/apiLastProducts'

    const [product, setProduct] = useState('')

    let arr = [product[0]]

    useEffect( () => {
        obtenerProducts()
    }, [])

    const obtenerProducts = async () => {
        const data = await fetch(URL)
        const products = await data.json()
        setProduct(products)
    }

    return (
        <>
            <h3>Ultimo Producto Agregado</h3>
            {
                product ? 
                arr.map((e,i) => (
                    <div key={i}>
                        <p>{e.id}</p>
                        <p>{e.name}</p>
                        <p>{e.description}</p>
                        <p>{e.avatar}</p>
                        <p>{e.price}</p>
                    </div>
                ))
                : <span>Cargando...</span>
            }
           
        </>
    )
}

// class ProductDetail extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             data: []
//         }
//     }

//     componentDidMount(){
//         fetch('/apiProducts')
//         .then(res => res.json())
//         .then(par => {
//             this.setState({data: par})
//         })
//     }

//     render(){
//         return (
//             <>
//                 {
//                     this.state.data.products.map((e) => console.log(e))
//                 }
//             </>
//         )
//     }
// }

export default ProductDetail