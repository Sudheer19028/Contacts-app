import React,{useReducer, useRef} from "react";
import {Link} from "react-router-dom";
import Contactcard from "./Contactcard";

const Contactlist=(props) =>{
  console.log(props);
const inputE1=useRef("");
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

   const getSearchTerm=() =>{
       props.searchkeyword(inputE1.current.value);
   };

    return(
        <div class="main">
         <h2>
              Contact list 
              <Link to="/add">
                  <button className="ui button blue to Right">Add Contact</button> 
                </Link>
              
         </h2>
         <div className="ui search">

         <div className="ui icon input">
             <input 
             ref={inputE1}
             type="text" 
             placeholder="Search contacts" 
             className="prompt" 
             value={props.term}
             onChange={getSearchTerm}/>
             <i className="search icon"></i>
         </div>
         </div>
        <div className="ui celled list"> {renderContactlist.length>0 ? renderContactlist:"No contacts available"}</div>
        </div>
        
        
        
    );



};
export default Contactlist ;