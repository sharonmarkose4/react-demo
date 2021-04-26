import { useState } from "react";
export default function UserList(props){
    return(
        <ol>
            {props.usersProp.map(function(user,index){
                return <li>{user.name}</li>
            })}
        </ol>
    )
}