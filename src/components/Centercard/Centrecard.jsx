import React, { useEffect, useState } from 'react'
import './Centrecard.scss'
const Centrecard = ({title, img , body, userId}) => {
    // if(userId){
    //     console.log(userId)
    // }
    const [displayComments,setdiplayComments]=useState(false);
    const [btn,isCliked]=useState(false)
    useEffect(() => {
        setdiplayComments(!displayComments);
    },[btn])
    const [data,setData]=useState()
    useEffect(()=>{
        const getposts = async ()=>{
            try{
                await fetch("http://localhost:4444/api/users/" + userId, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                    "Content-Type": "application/json",
                    },
                }).then((response) => response.json())
                .then((data) => {
                    setData(data)
                    // console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            }catch(err){
                console.log(err)
            }
        };
        getposts();
    },[])
    
  return (
    <div>
        <div className='cardcontainer'>
            <span className='cardhead'>
                <img src="https://cdn.cdnlogo.com/logos/c/18/ChatGPT_800x800.png" alt="" />
                {data &&<h2>{data.username}</h2>}
            </span>
            <img src={img} alt="" className='postimg' />
            <span className='title'>{title}</span>
            <span className='description'>{body}</span>
            <h3 onClick={()=>{isCliked(!btn) }} >Comments</h3>
            <span className={displayComments? "commentsbox hidecomments": "commentsbox"}>
                <span><b> Mr. Beast:</b>Great!!!</span>
                <div className='commenthere'>    
                    <input type="text" placeholder='Comment here'/>
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Centrecard