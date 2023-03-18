import React from 'react'
import Friend from '../Friend/Friend'
import Message from '../Message/Message'
import './Conversation.scss'
const Conversation = () => {
  return (
    <div className='conversation'>
        <Friend/>
        <div className='chatbox'>
          <Message/>
          <Message own={true}/>
          <Message/>
          <Message own={true}/>
          <Message/>
          <Message own={true}/>
        </div>
        <div className='messagecontent'>
          <textarea type="text" placeholder='Type here'/>
          <button>Send</button>
        </div>
    </div>
  )
}

export default Conversation