// ESECUZIONE
const gridElem = document.querySelector(".grid");
let bombs = [];
let clickedCells = [];
let score = 0;
let maxClick = -1;
let maxTry = 0;
let gridNumber = 0;
let gameOver = false;
let result = "";

//Mostrare la griglia di gioco al click
const playBtnElem = document.getElementById("play");
playBtnElem.addEventListener("click", showGrid);

/************/
// FUNZIONI

/**
 * Creazione cella
 * @param {number} innerNumber
 * @returns {any} elemento HTML che rappresenta la cella
 */
function generateGridCell(innerNumber) {
  let newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.innerHTML = `<span>${innerNumber}</span>`;
  return newCell;
}

/**
 * Creazione griglia
 * @param {any}
 * @param {any}
 * viene generato il giusto numero di celle, con la giusta disposizione in base alla difficoltà del gioco
 */
function gridCreation(cells, cellW) {
  for (let i = 1; i <= cells; i++) {
    gridNumber = i;
    let cell = generateGridCell(gridNumber);

    // Gestione del gioco, al click delle singole celle
    cell.addEventListener("click", function () {
      if (gameOver) {
        return;
      }
      maxClick = maxClick + 1;
      console.log(maxClick);
      if (maxClick === maxTry) {
        let result = "Complimenti, hai vinto!";
        document.getElementById("result").innerHTML = `${result}`;
        gameOver = true;
      }
      //Selezionare testo cella cliccata
      let cellNumber = parseInt(cell.textContent);
      console.log(cellNumber);

      if (bombs.includes(cellNumber)) {
        this.classList.add("bomb");
        let result = "Peccato, hai perso!";
        document.getElementById("result").innerHTML = `${result}`;
        gameOver = true;
        let score = `Punteggio: ${maxClick}`;
        document.getElementById("score").innerHTML = `${score}`;
        highlightBombs();
        console.log(score);
      } else {
        cell.classList.add("clicked-cell");
        clickedCells.push(cellNumber);
        console.log(clickedCells);
      }
    });
    gridElem.append(cell);
    cell.classList.add(cellW);
  }
}

/**
 * Mostra la griglia al click di "PLAY"
 * @param {any}
 * @returns {any}
 */
function showGrid() {
  gameOver = false;
  const mainGrid = document.getElementById("main-grid");
  const resultElem = document.getElementsByTagName("h2");
  //al click svuoto la griglia
  mainGrid.innerHTML = "";
  //creo la griglia in base al livello scelto
  const gameLevel = document.getElementById("level").value;
  console.log(gameLevel);
  if (gameLevel === "1") {
    gridCreation(100, "cell-w-1");
    generateBombs(100);
    let maxTry = tryCalculate(100);
  } else if (gameLevel === "2") {
    gridCreation(81, "cell-w-2");
    generateBombs(81);
    let maxTry = tryCalculate(81);
  } else if (gameLevel === "3") {
    gridCreation(49, "cell-w-3");
    generateBombs(49);
    let maxTry = tryCalculate(49);
    if (parseInt(clickedCells.length) === maxTry) {
      let result = "Hai Vinto!";
      document.getElementById("result").innerHTML = result;
      console.log(result);
    }
  }

  mainGrid.classList.remove("display-none");
}

/**
 * @param {any} min
 * @param {any} max
 * @returns {any}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Genera array di 16 numeri casuali senza ripetizioni compresi tra 1 e X(numero di celle nella griglia)
 * @param {number} max
 * @returns {array}
 */
function generateBombs(max) {
  while (bombs.length < 16) {
    const rndNum = getRndInteger(1, max);
    if (!bombs.includes(rndNum)) {
      bombs.push(rndNum);
    }
  }
  console.log(bombs);
}

/**
 * Definire numero max di tentativi
 * @param {any}
 * @returns {number} Numero di tentativi
 */
function tryCalculate(cellsNum) {
  maxTry = cellsNum - 17;
  console.log(maxTry);
}

/**
 * Evidenziare tutte le bombe una volta scoppiata la prima
 * @param {any}
 * @returns {any}
 */
function highlightBombs() {
  const allCell = document.querySelectorAll(".cell");
  for (let i = 0; i < allCell.length; i++) {
    const singleCell = allCell[i];
    if (bombs.includes(parseInt(singleCell.textContent))) {
      singleCell.classList.add("bomb");
      // showText = `<i class="fa-solid fa-bomb display-none"></i>`;
      // document.querySelectorAll(".cell").innerHTML = showText;
    }
  }
}
