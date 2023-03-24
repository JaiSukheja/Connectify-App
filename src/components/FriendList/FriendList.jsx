import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Friend from '../Friend/Friend'
import './FriendList.scss'
const FriendList = () => {
  const [currentChat,setCurrentChat]=useState(null)
  const [friends, setfriends]= useState([]);
  const { user } = useContext(AuthContext);
  useEffect(()=>{
    const getFriends = async ()=>{
      try{
        await fetch("http://localhost:4444/api/friend/" + user._id, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json())
        .then((data) => {
          setfriends(data)
          // console.log(friends)
          // console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }catch(err){
        console.log(err)
      }
    };
    getFriends();
  },[user._id])
  return (
    <div className='friendList'>
      <h1>Friends</h1>
      <div className='find'>
        <input type="text" placeholder='Search'/>
        <button>  
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className='list'>
        { friends.map((f)=>{
          // console.log(f);
          // console.log(f.members)
          return(
            <div onClick={()=>{setCurrentChat(f)}}>
              <Friend members={f.members} currentUser={user} key = {f._id} />
            </div>)
         })}

      </div>      
    </div>
  )
}

export default FriendList