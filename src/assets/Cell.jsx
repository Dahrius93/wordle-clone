const Cell = ({ letter, letterToGuess, wordToGuess }) => {
  const isRight = letter === letterToGuess
  const isNear = letter !== letterToGuess && wordToGuess.includes(letter)

  return (
    <>
      <div
        className={`cell ${isRight ? 'cell-right' : ''} ${
          isNear ? 'cell-near' : ''
        }`}
      >
        {letter}
      </div>
    </>
  )
}

export default Cell
