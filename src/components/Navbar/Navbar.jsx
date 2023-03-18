import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Navbar.scss'
import '../other/link.scss'
import { AuthContext } from '../../context/AuthContext'
const Navbar = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
        <div className="container">
            <div className="left">
                <Link to="/" className='logolink'>
                    <img src="https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png" alt="" className='logo' />
                    <span>Connectify</span>
                </Link>
            </div>
            <div className="center">
                <Link to="/" className='link'>
                    <span><i className="fa-sharp fa-solid fa-house"></i> Home</span>
                </Link>
                <Link to="/createpost" className='link'>
                    <span><i className="fa-sharp fa-solid fa-square-plus"></i> Create Post</span>
                </Link>
                <Link to="/message" className='link'>
                    <span><i className="fa-sharp fa-solid fa-square-plus"></i> Message</span>
                </Link>
            </div>
            <div className="right">
                {userDetails && <Link to="/profile" >
                    <span className='link'><img src={userDetails.profilePicture ? userDetails.profilePicture : "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} alt="" /> {userDetails.username}</span>
                </Link>}
                <Link onClick={()=>{localStorage.clear(); Navigate('/')}} >
                    <span className='link'><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar

/* <input type="text"  placeholder='Search'/>
<button><i className="fa-solid fa-magnifying-glass"></i></button> */