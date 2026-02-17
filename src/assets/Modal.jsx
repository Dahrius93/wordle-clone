const Modal = ({ onCloseModal }) => {
  return (
    <main>
      <div className="modal-content">
        <h2>Benvenuto in Wordle-clone in Italiano</h2>
        <p>Prova ad indovinare la parola di 5 lettere in 6 tentativi.</p>
        <p>
          Se indovini una lettera corretta al posto giusto, sarà evidenziata in
          <span style={{ color: 'green', fontWeight: 'bold' }}> verde</span>.
        </p>
        <p>
          Se la lettera è corretta ma al posto sbagliato, sarà evidenziata in
          <span style={{ color: 'orange', fontWeight: 'bold' }}> giallo</span>.
        </p>
        <p>
          Se la lettera non è presente nella parola, sarà evidenziata in
          <span style={{ color: 'gray', fontWeight: 'bold' }}> grigio</span>.
        </p>
        <button type="button" onClick={onCloseModal}>
          Start Game
        </button>
      </div>
    </main>
  )
}

export default Modal
