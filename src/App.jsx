
import { useState } from 'react'
import './App.css'
import Board from './Components/Board'
import Header from './Components/Header'
import Row from './Components/Row'
import TileButton from './Components/TileButton'
import { Words } from './Components/data/WordList'

function App() {

  const [wordObject, setWordObject] = useState(
    Words[Math.floor(Math.random() * Words.length)]
  )

  const [guesses, setGuesses] = useState(['', '', '', '', '', '']);
  const [solution, setSolution] = useState(wordObject.word);
  const [hint, setHint] = useState(wordObject.hint)
  const [currentRow, setCurrentRow] = useState(0);

  return (
    <div className='App'>
      <div className='game-area'>
        <Header />
        <Board guesses={guesses} solution={solution} currentRow={currentRow} />
        <Row />
        <TileButton />
      </div>
    </div>
  )
}

export default App
