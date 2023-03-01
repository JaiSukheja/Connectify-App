import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Profile.scss'
const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className="profile">
            <h1>Profile</h1>
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
            </div>
        </div>
    </div>
  )
}

export default Profile