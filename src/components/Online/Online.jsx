import React from 'react'
import Friend from '../Friend/Friend'
import './Online.scss'
const Online = () => {
  return (
    <div className='online'>
      <h1>Online</h1>
      <div className='list'>
        <Friend show={true}/>
        <Friend show={true}/>
        <Friend show={true}/>
        <Friend show={true}/>
        <Friend show={true}/>
        <Friend show={true}/>
      </div>

    </div>
  )
}

export default Online