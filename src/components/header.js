import React from "react"
import { Link } from "gatsby"
import styles from './header.module.css'

export default props => 
  <header>
    <h1>c a r m e n v r a m o s </h1>  
    <Link to="/">home</Link>
    <Link to="/projects/">projects</Link>
    <Link to="/about/">about</Link>
    <Link to="/contact/">contact</Link>
  </header>