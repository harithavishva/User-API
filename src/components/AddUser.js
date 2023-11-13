import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function AddUser({user, setUser}){
    const history = useHistory()
    //defining states
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [body, setBody] = useState("");

    const addNewUser = ()=>{
        const newUser = {
            id,
            title,
            body,
            
        }
        console.log(newUser)
        setUser([...user, newUser])
        history.push("/")
    } 
    
    return (
        <BaseApp
        title={"Add A New User"}
        >
             <div>
                <input 
                placeholder="id"
                value ={id}
                onChange={(event)=>setId(event.target.value)}
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
                onClick={addNewUser}
                >Add</button>
        </div>
        </BaseApp>
    )
}