import React from 'react'
import Row from './Row'

function Board({guesses, solution, currentRow}) {
  return (
    <div className='Board'>
        {
          guesses.map((guess, rowIndex) => {
           return <Row key={rowIndex} 
              guess={guess} solution={solution}
              isCurrentRow={rowIndex === currentRow}
            />
          })
        }
    </div>
  )
}

export default Board