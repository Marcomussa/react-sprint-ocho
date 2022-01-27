import React from 'react'
import Sidebar from '../Components/Sidebar'
import Title from '../Components/Title'

function Index(){
    return (
       <>
        <Title/>
         <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Sidebar/>
            <div className="col-md-9">
               
            </div>
        </div>
       </>
    )
}

export default Index