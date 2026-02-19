import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getUsers = async()=>{

        try{
            const response = await axios.get("https://node5.onrender.com/user/user/")
            
            setmessage(response.data.message)
            setusers(response.data.data)

        }catch(error){
            console.log(error)
            alert("Error while fetching users")
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>

        <button onClick={getUsers}>GET</button>

        <h2>MESSAGE = {message}</h2>

        {/* TABLE START */}
        <table border="1" align="center" cellPadding="10" style={{marginTop:"20px"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.length > 0 ? (
                        users.map((user,index)=>{
                            return (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.isActive ? "Active ✅" : "Inactive ❌"}
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan="5">No Data Found</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        {/* TABLE END */}

    </div>
  )
}
