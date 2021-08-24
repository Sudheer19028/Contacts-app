import React, { useState,useEffect } from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import {uuid} from "uuidv4";
import api from '../api/contacts';
import './App.css';
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist.js";
import Contactdetails from "./Contactdetails.js";
import Editcontact from "./Editcontact ";

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [ contacts,setContacts]=useState([]);

 //Retrivecontacts
 const retriveContacts =async()=>{

  const response =await api.get("/contacts");
  return response.data;
 };

  const addContactHandler = async (contact)=>
  {
       console.log(contact);
       const request={
         id:uuid(),
         ...contact,
       };
       const response =await api.post("/contacts", request);
       console.log(response);
       setContacts([...contacts,response.data]);
  };
const updateContactHandler = async (contact)=>{

  const response = await api.put('/contacts/ ${contact.id}', contact);
  const{id,name,email}=response.data;
  setContacts(
    contacts.map((contact) =>{
    return contact.id===id ?{...response.data}:contact;
  })
  );
};
 

  const removeContactHandler= async (id) => {
    await api.delete('/contacts/${id}');
    const newContactlist = contacts.filter((contact) => {
      
    return contact.id!==id;

    });
    setContacts(newContactlist);
  };
  useEffect(()=>
  {
   /* const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);*/
    const getAllContacts = async () =>{
    const allContacts = await retriveContacts();
    if(allContacts) setContacts(allContacts);
  };
   getAllContacts();
  },[]);

  useEffect(()=>
  {
   // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return(
    <div className="ui container">
      <Router>
      <Header/>
      <Switch>
      <Route 
      path="/"
      exact
      render={ (props)=>
        (<Contactlist
           {...props}
            contacts={contacts }
             getContactId={removeContactHandler}
             />
        
      
      
        )} 

         />

      <Route 
        path="/add" 
        render={(props) =>(
          <Addcontact {...props} addContactHandler={addContactHandler}/>
  )}
        />
        <Route 
        path="/edit" 
        render={(props) =>(
          <Editcontact {...props}  updateContactHandler={updateContactHandler}/>
  )}
        />

        
        <Route path="/contact/:id" component={Contactdetails}/>
      
      </Switch>
      
     {/*<Addcontact addContactHandler={addContactHandler}/>
     <Contactlist contacts={contacts } getContactId={removeContactHandler}/>*/}
      </Router>
     
     </div>
  );
}

export default App;

