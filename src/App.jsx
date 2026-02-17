import './App.css'
import Grid from './assets/Grid'
import Modal from './assets/Modal'
import { useState } from 'react'

import { useRandomWord } from './useRandomWord'

function App() {
  const { word } = useRandomWord()

  const [isModalOpen, setIsModalOpen] = useState(true)

  if (!word) return <div>Loading...</div>

  return (
    <>
      {isModalOpen ? (
        <Modal onCloseModal={() => setIsModalOpen(false)} />
      ) : (
        <Grid wordToGuess={word} />
      )}
    </>
  )
}

export default App
