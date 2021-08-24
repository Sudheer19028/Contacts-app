import React from "react";
import {Link} from "react-router-dom";
import Contactcard from "./Contactcard";

const Contactlist=(props) =>{
  console.log(props);

  const deleteContactHandler = (id)=>
  {
      props.getContactId(id);
  };
    
   const renderContactlist=props.contacts.map((contact)=>{
       return (
        <Contactcard
        contact={contact} 
        clickHandler={deleteContactHandler}
         key={contact.id} />
       );
   });
    return(
        <div class="main">
         <h2>
              Contact list 
              <Link to="/add"><button className="ui button blue to Right">Add Contact</button>  </Link>
              
         </h2>
         
        <div className="ui celled list">{renderContactlist}</div>

        </div>
        
        
    );



};
export default Contactlist ;