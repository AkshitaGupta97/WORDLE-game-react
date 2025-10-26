import React from 'react'

const PopUp = ({message, onReplay}) => {
  return (
    <div className='popup-overlay'>
        <div className='pop-up'>
            <p className='popup-message'>{message}</p>
            <button className='popup-button' onClick={{onReplay}}>Replay</button>
        </div>
    </div>
  )
}

export default PopUp