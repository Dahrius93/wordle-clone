# React Wordle-clone

Un piccolo clone di Wordle in Italiano realizzato con React.  
Il gioco seleziona una parola casuale e ti permette di indovinare inserendo lettere.

## Come usare

1. Clona il repository:

```bash
git clone https://github.com/tuo-username/react-wordle.git
```

2. Entra nella cartella del progetto:

```bash
cd react-wordle
```

3. Installa le dipendenze:

```bash
npm install
```

4. Avvia l'app:

```bash
npm run dev
```

5. Apri il browser su `http://localhost:3000`.

## Come funziona

- Inserisci lettere usando la tastiera.
- Premi `Enter` per confermare la parola.
- Premi `Backspace` per cancellare una lettera.
- Le celle cambiano colore:

  - **Verde** se la lettera è corretta.
  - **Giallo** se la lettera è nella parola ma nella posizione sbagliata.
  - **Grigio** se la lettera non è presente.

## Note

- L'app prende la lista delle parole da un file JSON remoto.
- In caso di problemi di fetch, viene usata una parola di fallback (`pippo`).
