import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Profile.scss'
const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className="profile">
            <div className="top">
                <div className='userImg'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T8An4X3aOY1Lgo5Ax18mf47hXPPQya5-mApv6J-hdm-aoUALUX5pYyp9Ll-9KWIjTTg&usqp=CAU" alt="" />
                </div>
                <div className='userDetails'>
                    <span className='username'>John Wick</span>
                    <span className='role'>Web Developer and Designer</span>
                    <span className='address'>New Delhi ,India</span>
                </div>
                <div className='edit'>
                    <div className='quote'>
                        Got Something New ? 
                    </div>
                    <button>Edit Here</button>
                </div>
            </div>
            <div className="bottom">

                <div className="left">
                    <div className='workLinks'>
                        <h2>Work Links</h2>
                        <Link>Website</Link>
                        <Link>LinkedIn</Link>
                        <Link>Github</Link>
                    </div>
                    <div className='workLinks'>
                        <h2>Skills</h2>
                        <span>Web Developer</span>
                        <span>Mern stack</span>
                        <span>UI/UX</span>
                    </div>

                </div>
                <div className="centre">
                    <h1>About</h1>
                    <div className='details'>
                        <div>
                            <span>Username</span>
                            <span>Name</span>
                            <span>Email</span>
                            <span>Phone</span>
                        </div>
                        <div className='values'>
                            <span>John</span>
                            <span>John Wick</span>
                            <span>johnwick@gmail.com</span>
                            <span>2151325422</span>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <h1>Other</h1>
                    <div className='otherdetails'>
                        <div>
                            <span>Followers</span>
                            <span>Followings</span>
                            <span>Friends</span>
                        </div>
                        <div className='values'>
                            <span>30</span>
                            <span>5</span>
                            <span>10</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* <h1>Profile</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T8An4X3aOY1Lgo5Ax18mf47hXPPQya5-mApv6J-hdm-aoUALUX5pYyp9Ll-9KWIjTTg&usqp=CAU" alt="" />
            <div className="details">
                <div>    
                    <b>Name: </b><span>Dwayne Johnson</span>
                </div>
                <div>    
                    <b>UserName: </b><span>Rock</span>
                </div>
                <div>    
                    <b>Email: </b><span>rock9911@gmail.com</span>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Profile