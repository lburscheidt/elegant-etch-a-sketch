/*1. Get user input and store in a variable
2. Calculate cell width = grid with / user input
3. Create grid with event listeners as per v1*/

document.documentElement.style.setProperty('--gridWidth', '480px');

let gridWidth = window.getComputedStyle(document.documentElement).getPropertyValue('--gridWidth').replace(/[^0-9]/g, "");

makeGrid(16);

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function () {
  resetGrid();
  let numberOfCells = prompt("Please enter a number between 1 and 100");
 
    makeGrid(numberOfCells);
  }
);

function resetGrid(){
  var cells = document.getElementsByClassName('small');

  while(cells[0]) {
      cells[0].parentNode.removeChild(cells[0]);
};}

function makeGrid(number) {
  
  const calc = gridWidth / number;
  const cellWidth = `${calc}px`;
  console.log(cellWidth);
  document.documentElement.style.setProperty("--cellWidth", cellWidth);

  const grid = document.querySelector(".grid");

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      const newCell = document.createElement("div");
      newCell.classList.add("cell");
      newCell.classList.add("small");
      newCell.setAttribute("id", `${i + 1}-${j + 1}`);
      newCell.addEventListener("mouseenter", function () {
        changeColor(newCell.id);
      });
      grid.appendChild(newCell);
    }
  }
}

function changeColor(cellId) {
  let cell = document.getElementById(cellId);
  cell.classList.remove("cell");
  cell.classList.add("cell-changed");
}
