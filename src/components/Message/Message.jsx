import React from 'react'
import './Message.scss'
const Message = ({own}) => {
  return (
    <div className={own ? 'message own' : 'message'}>
        <div className='messagehead'>
            <img src="" alt="" className='messageimg'/>
            <p className='messagetext'>Hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis repellat, praesentium iure quos cupiditate, debitis, officiis ut nihil suscipit esse reiciendis assumenda autem maiores. Illo, quis ea non repellendus, quo, tempora tenetur dolorum suscipit reiciendis officia labore accusamus. Consequuntur non similique vero quod sed facilis aperiam, ullam architecto asperiores!</p>
        </div>
        <div className='messagefoot'>1 hour ago</div>
    </div>
  )
}

export default Message