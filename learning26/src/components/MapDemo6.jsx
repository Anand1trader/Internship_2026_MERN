import React from 'react'

export const MapDemo6 = () => {
    var students =[
        {id:1,companyname:"google",age:25,experiance:'3-years'},
        {id:2,companyname:"microsoft",age:20,experiance:'4-years'},
        {id:3,companyname:"facebook",age:24,experiance:'5-years'},
        {id:4,companyname:"infosys",age:27,experiance:'4-years'},
        {id:5,companyname:"instagram",age:30,experiance:'6-years'},
        {id:6,companyname:"amazon",age:23,experiance:'5-years'}
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>MAP DEMO 6</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>COMPANYNAME</th>
                    <th>AGE</th>
                    <th>EXPERIANCE</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr >
                            <td>{st.id}</td>
                            <td>{st.companyname}</td>
                            <td>{st.age}</td>
                            <td>{st.experiance}</td>
                        </tr>
                    })
                }
            </tbody>
            
        </table>
    </div>
  )
}

