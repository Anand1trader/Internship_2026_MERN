import React from 'react'

export const MapDemo5 = () => {
    var students =[
        {id:1,name:"meera",age:20,marks:80,city:"ahemdabad",gender:"female"},
        {id:2,name:"raj",age:22,marks:88,city:"ahemdabad",gender:"male"},
        {id:3,name:"amit",age:25,marks:90,city:"ahemdabad",gender:"male"},
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>MAP DEMO 5</h1>
        <table className='table'>
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
                        return <tr style={{backgroundColor:st.gender =="female" && "pink"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color: st.age>24 ? "red" :"black"}}>{st.age}</td>
                            <td style={{backgroundColor:st.marks>90 && "yellow"}}>{st.marks}</td>
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
