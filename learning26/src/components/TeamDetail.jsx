import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {
    const { teamname } = useParams()
  return (
    <div style={{textAlign:"center"}}>
        <h1>Playing {teamname.toUpperCase()}...</h1>
    </div>
  )
}
