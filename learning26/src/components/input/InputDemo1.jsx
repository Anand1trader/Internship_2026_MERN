import React, { useState } from 'react'

export const InputDemo1 = () => {
  const[name,setName] = useState("")
  const[age,setAge] = useState("")
  const[city,setCity] = useState("")
  const[collagename,setCollageName] = useState("")
  const[sem,setSem] = useState("")
  const nameHandler = (event)=>{
    console.log(event.target.value)
    setName(event.target.value)
  }
  const ageHandler = (event)=>{
    setAge(event.target.value)
  }
  const cityHandler = (event)=>{
    setCity(event.target.value)
  }
  const collagenameHandler = (event)=>{
    setCollageName(event.target.value)
  }
  const semHandler = (event)=>{
    setSem(event.target.value)
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
          <label style={{textAlign:"center"}}>NAME</label>
          <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
          {name}
        </div>
        <div>
          <label>AGE</label>
          <input type='text' onChange={(event)=>{ageHandler(event)}}></input>
          {age}
        </div>
        <div>
          <label style={{textAlign:"center"}}>CITY</label>
          <input type='text' onChange={(event)=>{cityHandler(event)}}></input>
          {city}
        </div>
        <div>
          <label style={{textAlign:"center"}}>COLLAGE NAME</label>
          <input type='text' onChange={(event)=>{collagenameHandler(event)}}></input>
          {collagename}
        </div>
        <div>
          <label style={{textAlign:"center"}}>SEM</label>
          <input type='text' onChange={(event)=>{semHandler(event)}}></input>
          <br></br>
          {sem}
        </div>

    </div>
  )
}
