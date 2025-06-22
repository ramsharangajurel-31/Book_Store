import React from 'react'
import { useNavigate } from 'react-router-dom';

const Userlist = () => {
    const navigate= useNavigate();
    const users =[
        {_id:1, name: 'John', age: 25},
        {_id:2, name: 'Jane', age: 30},
        {_id:3, name: 'Bob', age: 35},
        {_id:4, name:"Linda",age:40},
    ]; 
    const handleUser=(userId , userName) =>{ 
        console.log("You Clicked ", userName);
        navigate(`/users/${userId}/${userName}`);
    }
  return (
    <div>
      <h4>Our user list </h4>
      <ul>
        {users.map((user, index) =>{
            return(
                <li key={user._id}onClick={()=>handleUser(user._id, user.name,)}>{user.name}</li>  
            )
            
        })}
      </ul>
    </div>
  )
}

export default Userlist
