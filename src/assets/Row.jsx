import Cell from './Cell'

const Row = ({ row, wordToGuess }) => {
  const letters = row.split('')
  const letterToGuess = wordToGuess.split('')

  return (
    <>
      <div className="row">
        <Cell
          letter={letters[0]}
          letterToGuess={letterToGuess[0]}
          wordToGuess={wordToGuess}
        />
        <Cell
          letter={letters[1]}
          letterToGuess={letterToGuess[1]}
          wordToGuess={wordToGuess}
        />
        <Cell
          letter={letters[2]}
          letterToGuess={letterToGuess[2]}
          wordToGuess={wordToGuess}
        />
        <Cell
          letter={letters[3]}
          letterToGuess={letterToGuess[3]}
          wordToGuess={wordToGuess}
        />
        <Cell
          letter={letters[4]}
          letterToGuess={letterToGuess[4]}
          wordToGuess={wordToGuess}
        />
      </div>
    </>
  )
}

export default Row
