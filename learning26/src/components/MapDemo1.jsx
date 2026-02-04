import React from 'react'

export const MapDemo1 = () => {
    let cars = ["audi","bmw","bughati","innova","rr","tesla"]
  return (
    <div>
        <h1>MAP DEMO 1</h1>
        {
            cars.map((c)=>{
               return <h1>{c}</h1>
            })
        }
    </div>
  )
}
