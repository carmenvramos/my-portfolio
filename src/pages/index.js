import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import photo from "../photo/Carmen2015.png"

export default () => (
  <div>
  <div>
     <Header/>
    <img src={photo} alt="Carmen's photo" />
  </div>
  <section>
    <h4>MEET</h4>
      <hr />
      <h1>CARMEN</h1>
      <h3>SOFTWARE DEVELOPER</h3>
  </section>
  </div>
)
