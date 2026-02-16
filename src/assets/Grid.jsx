import { useState, useEffect } from 'react'
import Row from './Row'

const Grid = ({ wordToGuess }) => {
  const [rowsValue, setRowsValue] = useState(['', '', '', '', '', ''])
  const [actualRow, setActualRow] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  console.log(wordToGuess)

  const listener = (event) => {
    if (event.key === 'Enter') {
      if (rowsValue[actualRow] === wordToGuess) {
        setIsGameOver(true)
        return
      }
      setActualRow((prev) => prev + 1)
    } else if (event.key === 'Backspace') {
      setRowsValue((prev) => {
        const newArr = [...prev]
        newArr[actualRow] = newArr[actualRow].slice(0, -1)
        return newArr
      })
    } else if (event.key.length === 1 && actualRow < 6) {
      setRowsValue((prev) => {
        const newArr = [...prev]
        newArr[actualRow] += event.key
        return newArr
      })
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', listener)
    console.log(rowsValue)

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
          {rowsValue.map((row, index) => {
            return <Row key={index} row={row} wordToGuess={wordToGuess} />
          })}
        </div>
      )}
    </>
  )
}

export default Grid
