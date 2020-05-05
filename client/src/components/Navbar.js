import React from 'react'
import {Link} from 'react-router-dom'


const NaBar = ()=>{
    return (
        <nav>
        <div className="nav-wrapper white" style={{color:"black"}}>
          <Link to="/" clssNLinkme="brLinknd-logo left">MXH</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
    )
    

export default NaBar