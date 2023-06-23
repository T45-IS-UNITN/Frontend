# Repository Frontend

Questo repository contiene il codice frontend per il progetto. È sviluppato con SvelteKit e utilizza Vite come server di sviluppo. Il progetto include Bootstrap per lo stile e Axios per effettuare richieste HTTP.

## Prima di iniziare

Per eseguire il progetto in locale, seguire queste istruzioni:

1. Clonare il repository sul proprio computer.
2. Navigare alla cartella principale del progetto.
3. Installare le dipendenze del progetto eseguendo il seguente comando:

```bash
npm install
```

4. Avviare il server di sviluppo eseguendo il seguente comando:

```bash
npm run dev
```

5. Aprire il proprio browser e accedere all'indirizzo `http://localhost:5173` per visualizzare l'applicazione in esecuzione.

## Script disponibili

Nella cartella del progetto, è possibile eseguire i seguenti script:

- `dev`: Avvia il server di sviluppo.
- `build`: Compila il progetto per la produzione.
- `preview`: Serve la versione di produzione per l'anteprima.

È possibile eseguire questi script utilizzando `npm run <nome-script>`.

## Struttura del progetto

I principali file e cartelle di questo progetto sono i seguenti:

- `src`: Contiene il codice sorgente dell'applicazione SvelteKit.
- `src/routes`: Contiene i componenti delle varie pagine.
- `src/lib`: Contiene funzioni di utilità e moduli riutilizzabili.
- `public`: Contiene file statici come immagini e font.
