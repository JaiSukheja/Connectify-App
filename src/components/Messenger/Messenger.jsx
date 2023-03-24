import React, { useContext, useEffect, useRef, useState } from 'react'
import './Messenger.scss'
import Conversation from '../Conversation/Conversation'
import FriendList from '../FriendList/FriendList'
import Online from '../Online/Online'
import Navbar from '../Navbar/Navbar'
import { AuthContext } from '../../context/AuthContext'
import Friend from '../Friend/Friend'
import Message from '../Message/Message'
import { io } from 'socket.io-client'

const Messenger = () => {
  const textarea =document.getElementById('textarea')
  const [currentChat,setCurrentChat]=useState(null)
  const [messages,setMessages] = useState([])
  const [friends, setfriends]= useState([]);
  const [newMessage, setNewMessage]= useState("")
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  const socket = useRef()
  const [arrivalMessage, setArrivalMessage] = useState(null) 

  // console.log(socket)

  useEffect(()=>{
    socket.current = io("ws://localhost:8900")
    socket.current.on("getMessage", (data)=>{
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  },[]);

  useEffect(()=>{
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev)=>[...prev, arrivalMessage])
  },[arrivalMessage,currentChat])

  useEffect(()=>{
    socket.current.emit("addUser",user._id);
    socket.current.on("getUsers",(users)=>{
      // console.log(users)
    })
  },[user]);


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

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      friendId: currentChat._id
    };
    const receiverId = await currentChat.members.find((member)=>{return (member !== user._id);})
    
    // console.log(receiverId)
    
    socket.current.emit("sendMessage",{
      senderId: user._id,
      receiverId: receiverId,
      text: newMessage,
    });

    try{
      await fetch("http://localhost:4444/api/messages/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }).then((response) => response.json())
      .then((data) => {
        // setfriends(data)
        // console.log(friends)
        setMessages([...messages,data])
        // console.log("Success:", messages);
        textarea.value=""
        setNewMessage("")
      })
      .catch((error) => {
        console.error("Error:", error);
      });      
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    const getMessages = async () => {
      try {
          await fetch("http://localhost:4444/api/messages/" + currentChat?._id, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((response) => response.json())
          .then((data) => {
            // console.log(data)
            setMessages(data)
            // console.log("Success:", messages);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        } catch (err) {
          console.log(err);
        }
      }
      getMessages();
  }, [currentChat]);

  
  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behaviour:"smooth"})
  },[messages])

  return (
    <div>
      <Navbar/>
      <div className='messenger'>




          <div className="left">
            <div className='friendList'>
              <h1>Friends</h1>
              <div className='find'>
                <input type="text" placeholder='Search'/>
                <button>  
                  <i className="fa-solid fa-magnifying-glass"></i>
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
          </div>




          <div className="center">
            <div className='conversation'>
              {
                currentChat ? 
                <>
                <Friend members={currentChat.members} currentUser={user}/>
                <div className='chatbox'>
                  
                  {messages.map((m)=>{
                    // console.log(m.text);
                    // console.log(m.sender === user._id);
                    // console.log(m._id);
                    return (<Message message={m} own={m.sender === user._id} key = {m._id}/>)
                  })}
                  <div ref={scrollRef}></div>
                  <div ref={scrollRef}></div>
                </div>
              <div className='messagecontent'>
                <textarea id='textarea' type="text" placeholder='Type here' onChange={(e)=>{setNewMessage(e.target.value)}}/>
                <button onClick={handleSubmit}>Send</button>
              </div>
              </>:<span className='noChat' >Select a friend to start a chat. </span>}
            </div>
          </div>




          <div className="right">
              <Online/>
          </div>
      </div>
    </div>
  )
}

export default Messenger