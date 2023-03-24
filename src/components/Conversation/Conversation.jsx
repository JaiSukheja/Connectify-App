import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Friend from '../Friend/Friend'
import Message from '../Message/Message'
import './Conversation.scss'
const Conversation = () => {
  const { user } = useContext(AuthContext);
  const [currentChat,setCoversations] = useState(null)
  const [messages,setMessages] = useState([])
  const [friends, setfriends]= useState([]);
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
    <div className='conversation'>
          {
            currentChat ? 
            <>
            <Friend/>
            <div className='chatbox'>
              
              <Message/>
              <Message own={true}/>
              <Message/>
              <Message own={true}/>
              <Message/>
              <Message own={true}/>
            </div>
          <div className='messagecontent'>
            <textarea type="text" placeholder='Type here'/>
            <button>Send</button>
          </div>
          </>:<span className='noChat' >Open a Conversation to start a chat. </span>}
    </div>
  )
}

export default Conversation