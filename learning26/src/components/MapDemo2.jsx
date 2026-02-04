import React from 'react'

export const MapDemo2 = () => {
    var users =[
        {id:1,name:'anand',age:21,gender:"male"},
        {id:2,name:'riya',age:25,gender:"male"},
        {id:3,name:'meera',age:22,gender:"female"}
    ]
  return (
    <div>
        <h1>MAP DEMO 2</h1>
        {
            users.map((user)=>{
                return <li>{user.id} -{user.name} {user.age} -{user.gender}</li>
            })
        }
    </div>
  )
}
