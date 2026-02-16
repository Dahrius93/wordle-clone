import { useState, useEffect } from 'react'

const WORDS_URL =
  'https://raw.githubusercontent.com/Dahrius93/words/main/words.json'

export const useRandomWord = () => {
  const [word, setWord] = useState('')

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const res = await fetch(WORDS_URL)
        if (!res.ok) {
          throw new Error('Network response was not ok')
          setWord('pippo') // Fallback in caso di errore
        }
        if (res.status === 404) {
          throw new Error('File non trovato')
          setWord('pippo') // Fallback in caso di errore
        }
        const data = await res.json()
        const randomWord = data[Math.floor(Math.random() * data.length)]
        setWord(randomWord)
        if (!randomWord) {
          throw new Error('Nessuna parola trovata')
        }
      } catch (err) {
        console.error('Errore nel fetch delle parole:', err)
        setWord('pippo') // Fallback in caso di errore
      }
    }

    fetchWords()
  }, [])

  return { word }
}
