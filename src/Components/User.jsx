import React, {useEffect, useState} from 'react'
import Title from '../Components/Title'
import Sidebar from '../Components/Sidebar'

function User(props){

    const URL = '/api/users'

    const [user, setUser] = useState([])
    const [userLength, setLength] = useState([])
    const [tablaUsuarios, setTablaUsuarios] = useState([])
    const [busqueda, setBusqueda] = useState('')

    useEffect( () => {
        obtenerUsers()
    }, [])

    const obtenerUsers = async () => {
        const data = await fetch(URL)
        const users = await data.json()
        setUser(users.users)
        setTablaUsuarios(users.users)
        setLength(users.count)
    }

    const handleChange = (e) => {
        setBusqueda(e.target.value)
        filtar(e.target.value)
    }   

    const filtar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if(elemento.email.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
              return elemento;
            }
          });
        setUser(resultadosBusqueda);
    }

    return (
        <>  
            <Title/>
            <div style={{display: 'flex'}}>
            <Sidebar/>
            <div className='col-md-10'style={{
                background: 'rgba(255,255,255,0.6)', padding: '10px'
            }}>
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
                <hr />
                <div className='mb-4 mt-4'>
                    <input 
                        type="text" 
                        className='form form-control' 
                        placeholder='Buscar Usuario (Email)'
                        value={busqueda}
                        onChange={handleChange}/>
                </div>
                <div className='contenedorUsers mb-2' style={{display: 'flex'}}>
                    <div className="col-md-2">
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
                    <div className="col-md-2">
                        <h4>Gender</h4>
                    </div>
                    <hr />
                </div>
                <div className='contenedorUsers'>
                {
                    user.map((item, i) => (
                        <div key={i} style={{display: 'flex', marginBottom: '25px'}}>
                            <div className="col-md-2">
                                <h6>#{item.id}</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>{item.name}</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>{item.surname}</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>{item.email}</h6>
                            </div>
                            <div className="col-md-2">
                                <h6>{item.gender}</h6>
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