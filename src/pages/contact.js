import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    
    <Header/>
    <h1>CONNECT with me @</h1>
    
      <ul>
        <li>
          <a href="mailto:carmenvramos@yahoo.com">My Email Address</a> 
          
        </li>
        <li>
          <a href="https://www.linkedin.com/in/carmenvramos">My LinkedIn Page</a>
        </li>
        
        <li>
            <a href="https://github.com/carmenvramos">My GitHub Page</a>
        </li>
      </ul>
    
  </div>
)