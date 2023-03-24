import React, { useEffect, useState } from 'react'
import './Friend.scss'


const Friend = ({members, currentUser,show}) => {
//   useEffect(()=>{
//     console.log(props)
//   },[props])
// console.log(members)
  const [user,setUser] = useState(null);
  
  useEffect(()=>{
    if(members){
      const friendId = members.find((m)=>{ return m !== currentUser._id })
      const getUser = async()=>{
        try {
          await fetch("http://localhost:4444/api/users/" + friendId, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((response) => response.json())
          .then((data) => {
            setUser(data)
            // console.log("Success:", data);
          })
          
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }
    },[currentUser, members])


  return (
    <div className='friend'>
      {user && <img src={user.profilePicture} alt="" />}
      {user && <span className='name'>{user.username}</span>}
      {/* <div className={show ? 'onlinebadge' : '' }></div> */}
    </div>
  )
}

export default Friend

// {user.profilePicture ? user.profilePicture : "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"}