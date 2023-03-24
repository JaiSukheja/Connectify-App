import React from 'react'
import './Message.scss'
import { format } from 'timeago.js'
const Message = ({message,own}) => {
  // console.log(message)
  return (
    <div className={own ? 'message own' : 'message'}>
        <div className='messagehead'>
            <img src="" alt="" className='messageimg'/>
            <p className='messagetext'>{message.text}</p>
        </div>
        <div className='messagefoot'>{format(message.createdAt)}</div>
    </div>
  )
}

export default Message