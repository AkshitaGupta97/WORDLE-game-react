import { useState } from "react";
import { Words } from "../Components/data/WordList";


export const useWordleGame = () => {
    const [wordObject, setWordObject] = useState(
        Words[Math.floor(Math.random() * Words.length)]
    )

    const [guesses, setGuesses] = useState(['', '', '', '', '', '']);
    const [solution, setSolution] = useState(wordObject.word);
    const [hint, setHint] = useState(wordObject.hint)
    const [currentRow, setCurrentRow] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState('');

    const handleKeyPress = (key) => {
        if (gameOver) return;

        const normalizedkey = key.toLowerCase();

        if (normalizedkey === 'enter') {
            if (guesses[currentRow].length !== 5) {
                return;
            }
            if (currentRow === 5) {
                setMessage(`Game Over! Theword is ${solution.toUpperCase()}`)
                setGameOver(true);
                return;
            }

            setCurrentRow((prev) => prev + 1);
            setMessage('');
            return;
        }

        if (normalizedkey === 'backspace') {
            setGuesses((prevGuess) => {
                const newGuess = [...prevGuess]
                newGuess[currentRow] = newGuess[currentRow].splice(0, -1);
                return newGuess
            })
            return;
        }

        // using regex for alphabet
        if (/^[a-z]$/.test(normalizedkey)) {
            setGuesses((prevGuess) => {
                const newGuess = [...prevGuess];
                if (newGuess[currentRow].length < 5) {
                    newGuess[currentRow] += normalizedkey
                }
                return newGuess;
            })
        }

    }

    const resetGame = () => {
        const newWordObject = Words[Math.floor(Math.random() * Words.length)]
        setWordObject(newWordObject);
        setSolution(newWordObject.word);
        setHint(newWordObject.hint);
        setGuesses(['', '', '', '', '', ''])
        setCurrentRow(0)
        setMessage('')
        setGameOver(false);

    }

    return {
        guesses, solution, hint, currentRow,
        gameOver, message, handleKeyPress, resetGame
    }
}