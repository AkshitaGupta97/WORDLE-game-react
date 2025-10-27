
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Board from './Components/Board'
import Header from './Components/Header'
import Keyboard from './Components/Keyboard'
import { useWordleGame } from './Hooks/useWordleGame'

function App() {

  const {guesses, solution, hint, currentRow,
    gameOver, message, handleKeyPress, resetGame} = useWordleGame()

  const handleKeyDown = useCallback((event) => {
    handleKeyPress(event.key.toLowerCase())
  },[handleKeyPress])

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown())
    return () => {
      window.removeEventListener('keydown', (e) => handleKeyDown())
    }
  },[handleKeyDown])

  return (
    <div className='App'>
      <div className='game-area'>
        <Header />
        <Board guesses={guesses} solution={solution} currentRow={currentRow} />

        <div className='hint'>
            <b>Hint : </b> <span>{hint}</span>
        </div>
      </div>
      
        <Keyboard onKeyPress={handleKeyPress} />

        {gameOver && (
          <PopUp message={message} onReplay={resetGame} />
        )}
    </div>
  )
}

export default App
