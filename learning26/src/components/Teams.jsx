import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>IPL Teams</h1>
        <ul>
            <li><Link to="/teamdetail/gt">GT</Link></li>
            <li><Link to="/teamdetail/csk">CSK</Link></li>
            <li><Link to="/teamdetail/mi">MI</Link></li>
            <li><Link to="/teamdetail/rcb">RCB</Link></li>
            <li><Link to="/teamdetail/rr">RR</Link></li>
            <li><Link to="/teamdetail/lsg">LSG</Link></li>
            <li><Link to="/teamdetail/kk">KK</Link></li>
            <li><Link to="/teamdetail/kxip">KXIP</Link></li>
            <li><Link to="/teamdetail/srh">SRH</Link></li>
            <li><Link to="/teamdetail/dc">DC</Link></li>
            
        </ul>
    </div>
  )
}
