import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div>
        <div className="container">
            <div className="left">
                Connectify
            </div>
            <div className="center">
                <span><i class="fa-sharp fa-solid fa-house"></i> Home</span>
                <span><i class="fa-solid fa-clock-rotate-left"></i> Story</span>
                <span><i class="fa-solid fa-user-group"></i> Friends</span>
                <span><i class="fa-solid fa-users-viewfinder"></i> Groups</span>
                <span><i class="fa-solid fa-video"></i> Video</span>
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