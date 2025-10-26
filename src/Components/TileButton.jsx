import React from 'react'

function TileButton({letter, status}) {
  return (
    <div className={`tileButton ${status}`}>
        {
          letter
        }
    </div>
  )
}

export default TileButton