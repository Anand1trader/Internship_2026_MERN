import React from 'react'

export const MapDemo3 = () => {
    var students =[
        {id:1,name:"meera",age:20,marks:80,city:"ahemdabad",gender:"female"},
        {id:2,name:"raj",age:22,marks:88,city:"ahemdabad",gender:"male"},
        {id:3,name:"amit",age:25,marks:90,city:"ahemdabad",gender:"male"},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 3</h1>
        <table border="2" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
            
        </table>
    </div>
  )
}
