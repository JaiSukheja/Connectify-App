import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Profilebox.scss'
const Profilebox = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
        <div className="profilebox">
            {user && <img src={user.coverPicture} alt="" className='posterimg'/>}
            {/* <img src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg" alt="" className='posterimg' /> */}
            {user && <Link to="/profile" >
                    <span className='link'><img src={user.profilePicture} alt="" className='profileimg'/></span>
                </Link>}
            <h2>{user.username}</h2>
            <span>{user.email}</span>
            <Link className='myprofile' to='/profile'>My Profile</Link>
        </div>
    </div>
  )
}

export default Profilebox