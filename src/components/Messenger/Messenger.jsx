import React, { useContext } from 'react'
import './Messenger.scss'
import Conversation from '../Conversation/Conversation'
import FriendList from '../FriendList/FriendList'
import Online from '../Online/Online'
import Navbar from '../Navbar/Navbar'
import { AuthContext } from '../../context/AuthContext'
const Messenger = () => {

  const { user } = useContext(AuthContext)

  return (
    <div>
      <Navbar/>
      <div className='messenger'>
          <div className="left">
              <FriendList/>
          </div>
          <div className="center">
              <Conversation/>
          </div>
          <div className="right">
              <Online/>
          </div>
      </div>
    </div>
  )
}

export default Messenger