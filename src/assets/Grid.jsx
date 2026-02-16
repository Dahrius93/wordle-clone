import { useState, useEffect } from 'react'
import Row from './Row'

const Grid = ({ wordToGuess }) => {
  const [rowsValue, setRowsValue] = useState(['', '', '', '', '', ''])
  const [actualRow, setActualRow] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  const listener = (event) => {
    const key = event.key.toLowerCase()

    // Blocca numeri e simboli, permette solo lettere a-z
    if (/^[a-z]$/.test(key)) {
      setRowsValue((prev) => {
        const newArr = [...prev]

        // Aggiunge la lettera solo se non supera la lunghezza della parola
        if (newArr[actualRow].length < wordToGuess.length) {
          newArr[actualRow] += key
        }

        // Controllo automatico appena raggiunge la lunghezza
        if (newArr[actualRow].length === wordToGuess.length) {
          if (newArr[actualRow] === wordToGuess) {
            setIsGameOver(true)
          } else if (actualRow < prev.length - 1) {
            setActualRow((prevRow) => prevRow + 1)
          } else {
            setIsGameOver(true)
          }
        }

        return newArr
      })
    } else if (key === 'backspace') {
      setRowsValue((prev) => {
        const newArr = [...prev]
        newArr[actualRow] = newArr[actualRow].slice(0, -1)
        return newArr
      })
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [actualRow, rowsValue])

  return (
    <>
      {isGameOver ? (
        <div className="game-over">
          <h1>Gioco terminato</h1>
          <p>La parola era: {wordToGuess}</p>
        </div>
      ) : (
        <div className="grid">
          {rowsValue.map((row, index) => (
            <Row key={index} row={row} wordToGuess={wordToGuess} />
          ))}
        </div>
      )}
    </>
  )
}

export default Grid
