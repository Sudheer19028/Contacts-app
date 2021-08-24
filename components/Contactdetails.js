import React from "react";
import { Link } from "react-router-dom";
import user1 from "../images/user1.jpeg";
import Contactlist from "./Contactlist";
const Contactdetails=(props)=>{
  const{name,email}=props.location.state.contact;
return(
 
    <div className="main">
           <div className="ui card centered">
           
           <div className="image">
               <img src={user1} alt="user1"/>
           </div>
            <div className="content">

                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
            <div className="center-div">
                  <Link to="/" ><button className="ui button center">Back to Contactlist</button></Link>
            </div>

           </div>
    </div>


);

};

export default Contactdetails;