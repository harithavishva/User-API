import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import BaseApp from '../Core/Base';

const EditUser = ({user, setUser}) => {
    const [title, setTitle] = useState("");
    const [idx, setIdx] = useState("");
    const [body, setBody] = useState("");

    const {id} = useParams();
    const history = useHistory()

  const selectedUser = user.find((per)=>per.id === id); 

     useEffect(() => {
     setIdx(selectedUser.id)
     setTitle(selectedUser.title)
     setBody(selectedUser.body)
     

  }, []);


  const updateUser = ()=>{
  // step 1 : collecting new data
   const editIndex = user.findIndex(per => per.id === id)
   console.log(editIndex)
    //chnaged data in the input field
    const editedData = {
        id :idx, 
        title, 
        body
        
    }
    //updating the user
     user[editIndex] = editedData
     setUser([...user]); 
     history.push("/");
  }

  return (
    <BaseApp
    title={"Edit the user details"}
    >
         <div>
            <input 
            placeholder="id"
            value ={idx}
            onChange={(event)=>setIdx(event.target.value)}
            />

            <input 
            placeholder="title"
            value= {title}
            onChange={(event)=>setTitle(event.target.value)}
            />

            <input 
            placeholder="body"
            value= {body}
            onChange={(event)=>setBody(event.target.value)}
            />

           
            <button
            onClick={updateUser}
            >Edit</button>
    </div>
    </BaseApp>
  )
}

export default EditUser