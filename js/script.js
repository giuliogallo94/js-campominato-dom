// ESECUZIONE
const gridElem = document.querySelector(".grid");

//Mostrare la griglia di gioco al click
const playBtnElem = document.getElementById("play");
playBtnElem.addEventListener("click", showGrid);

// Generare le bombe
// const bombs = generateBombs(16);
// console.log(bombs);

// const maxClicks = gridSize - bombs.length;
// console.log(maxClicks);

// let clickedCells = [];

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
  newCell.innerHTML = innerNumber;
  return newCell;
}

/**
 * Creazione griglia
 * @param {any}
 * @param {any}
 * viene generato il giusto numero di celle, con la giusta disposizione in base alla difficoltà del gioco
 */
function gridCreation(cellNum, cellW) {
  for (let i = 1; i <= cellNum; i++) {
    let gridNumber = i;
    let cell = generateGridCell(gridNumber);
    cell.addEventListener("click", function () {
      console.log(cell);
      cell.classList.add("bg-cyan");
    });
    gridElem.append(cell);
    cell.classList.add(cellW);
  }
}

/**
 * Mostra la griglia al click
 * @param {any}
 * @returns {any} rimozione della classe "display-none"
 */
function showGrid() {
  const mainGrid = document.getElementById("main-grid");
  //al click svuoto la griglia
  mainGrid.innerHTML = "";

  //creo la griglia in base al livello scelto
  const gameLevel = document.getElementById("level").value;
  console.log(gameLevel);
  if (gameLevel === "1") {
    gridCreation(100, "cell-w-1");
  } else if (gameLevel === "2") {
    gridCreation(81, "cell-w-2");
  } else if (gameLevel === "3") {
    gridCreation(49, "cell-w-3");
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
  const result = [];
  while (result.length < 16) {
    const rndNum = getRndInteger(1, max);
    if (!result.includes(rndNum)) {
      result.push(rndNum);
    }
  }
  return result;
}
