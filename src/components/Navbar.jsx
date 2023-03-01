import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import './link.scss'
const Navbar = () => {
  return (
    <div>
        <div className="container">
            <Link to="/home" className='link'>
                <div className="left">
                    Connectify
                </div>
            </Link>
            <div className="center">
                <Link to="/home" className='link'>
                    <span><i class="fa-sharp fa-solid fa-house"></i> Home</span>
                </Link>
                <Link to="/createpost" className='link'>
                    <span><i class="fa-sharp fa-solid fa-square-plus"></i> Create Post</span>
                </Link>
                <Link to="/profile" className='link'>
                    <span><i class="fa-solid fa-user"></i> Profile</span>
                </Link>
                <Link to="/signin" className='link'>
                    <span><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</span>
                </Link>
                {/* <Link to="/profile">
                    <span><i class="fa-solid fa-video"></i> Video</span>
                </Link> */}
            </div>
            <div className="right">
                <input type="text"  placeholder='Search'/>
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar