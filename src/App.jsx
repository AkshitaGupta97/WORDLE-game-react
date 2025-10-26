
import { useState } from 'react'
import './App.css'
import Board from './Components/Board'
import Header from './Components/Header'
import { Words } from './Components/data/WordList'

function App() {

  const [wordObject, setWordObject] = useState(
    Words[Math.floor(Math.random() * Words.length)]
  )

  const [guesses, setGuesses] = useState(['asdfa', '', '', '', '', '']);
  const [solution, setSolution] = useState(wordObject.word);
  const [hint, setHint] = useState(wordObject.hint)
  const [currentRow, setCurrentRow] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const handleKeyPress = (key) => {
    if(gameOver) return;

    const normalizedkey = key.toLowercase();
    if(normalizedkey === 'enter'){
      if(guesses[currentRow].length !== 5){
        return;
      }
      if(currentRow === 5){
        setMessage(`Game Over! Theword is ${solution.toUpperCase()}`)
        setGameOver(true);
        return;
      }

      setCurrentRow((prev) => prev + 1);
      setMessage('');
      return;
    }

    if(normalizedkey === 'backspace'){
      setGuesses((prevGuess) => {
        const newGuess = [...prevGuess]
        newGuess[currentRow] = newGuess[currentRow].splice(0, -1);
        return newGuess
      })
      return;
    }

  }

  return (
    <div className='App'>
      <div className='game-area'>
        <Header />
        <Board guesses={guesses} solution={solution} currentRow={currentRow} />

        <div className='hint'>
            <b>Hint : </b> <span>{hint}</span>
        </div>
      </div>
    </div>
  )
}

export default App
