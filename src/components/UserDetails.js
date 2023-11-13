import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export function UserDetails({user}){
    const {id} = useParams();
    const person = user[id];
    return (
        <BaseApp
        title = {"User details"}
        >
           <div className="user-content">
                <div  className="user-card">
                    <h1>{person.title}</h1>
                    <br></br>
                    <p>body : {person.body}</p>
                    
                    </div>
                </div>
        </BaseApp>
    )
}