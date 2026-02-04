import React from 'react'

export const MapDemo4 = () => {
    var cities =[
        {id: 1, name:"Ahemdabad",pop: 8000000, AQI: 300},
        {id: 2, name:"Delhi",pop: 5000000, AQI: 400},
        {id: 3, name:"jammu",pop: 900000, AQI: 200},
    ]
  return (
    <div style={{ textAlign:'center'}}>
        <h1>MAP DEMO 4</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>POPULATION</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                {
                    cities.map((city)=>{
                        return <tr>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.pop}</td>
                            <td>{city.AQI}</td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}
