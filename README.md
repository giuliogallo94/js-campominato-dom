# ESERCIZIO

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

---

## PARTE 2

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

# BONUS

**1.** Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

---

## PARTE 2

**2.** Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
**3.** Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

## SVOLGIMENTO

**1.** Creare il layout su HTML
**2.** Creare la funzione che genera le celle
**3.** Creare la funzione per fare in modo che al click corrisponda la visualizzazione della griglia con tutte le celle
**4.** Aggiungere un evento al click all'interno di ogni cella, con quest'ultima che si colora in azzurro e che faccia spuntare il numero di cella in console.
**5.** Aggiungere la select al lato del bottone "play" con le varie difficoltà di gioco
**6.** Fare in modo che in base al livello selezionato cambi la griglia
