import React from "react"
import Login from "../Login page/Login";
import { Link } from "react-router-dom";

const navbar = () => {
  
  return (
    <>
    <section className="container-fluid navfluid">
      <div className="row">
      <div className="col-sm-4 col-4 "><h3 className="logo">iTasks</h3></div>
      <div className="col-sm-8 col-8 navgreat"> <ul>
          
          <li>Home</li>
          <li>Your Tasks</li>
          <li><Link className="log" to={'/Login'}>log In</Link></li>
        </ul></div>
       
        
      </div>
      
    </section>
  
    </>
    
  )
  
  

}

export default navbar
