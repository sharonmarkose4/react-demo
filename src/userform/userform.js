import { useState } from "react";
import axios from "axios";
import  UserList from "../userlist/userlist";

function Userform(){
    const [users,setUsers]=useState([{name:'Sharon',mobileNumber:234}]);
    const [userform, setUserform]= useState({
        name:'Ram',
        mobileNumber:20
    });
    const save=function(event){
        console.log(userform.name,userform.mobileNumber);
        axios.post("http://localhost:8080/user",userform)
        .then(function(response){
        console.log(response)
      } )
      .catch(function(error){
        console.log(error);
      });
    };

    return(
        <div>
            userform!
            <input value={userform.name} name='name' onChange={updateState}></input>
            <input placeholder="mobileNumber"  name='mobileNumber' value={userform.mobileNumber} onChange={updateState}></input>
            <button onClick={save}>Save</button>
            <UserList usersProp={users}></UserList>
        </div>
    );
    
     function updateState(event){
        console.log(event);
        const current = { ...userform,
            [event.target.name]: event.target.value};
        console.log(current);
        setUserform(current);
    }  
}

export default Userform;