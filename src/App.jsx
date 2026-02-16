import './App.css'
import Grid from './assets/Grid'

import { useRandomWord } from './useRandomWord'

function App() {
  const { word } = useRandomWord()

  if (!word) return <div>Loading...</div>

  return (
    <>
      <Grid wordToGuess={word} />
    </>
  )
}

export default App
