document.documentElement.style.setProperty("--gridWidth", "400px");


let gridWidth = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--gridWidth")
  .replace(/[^0-9]/g, "");

const clearBtn = document.getElementById("clear-btn");
const resetBtn = document.getElementById("reset-btn");
const discoBtn = document.getElementById("disco-btn");
const standardBtn = document.getElementById("standard-btn");



function makeGrid(number) {
  document.documentElement.style.setProperty(
    "--cellWidth",
    `${gridWidth / number}px`,
  );
  const grid = document.querySelector(".grid");
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      const newCell = document.createElement("div");
      newCell.classList.add("cell");
      newCell.setAttribute("id", `${i + 1}XXX${j + 1}`);
      newCell.addEventListener("mouseenter", function () {
        changeColor(newCell.id);
      });
      grid.appendChild(newCell);
    }
  }
  return number;
}

makeGrid(16);
const cells = document.querySelectorAll(".cell");

clearBtn.addEventListener("click", () =>{
  cells.forEach(cell =>{
    cell.style.backgroundColor = "white";
  });
});

resetBtn.addEventListener("click", function () {
  resetGrid();
  let numberOfCells = prompt("Please enter a number between 1 and 100");
  makeGrid(numberOfCells);
});

function resetGrid() {
  var cells = document.getElementsByClassName("cell");
  while (cells[0]) {
    cells[0].parentNode.removeChild(cells[0]);
  }
}



function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return `rgba(${r}, ${g},${b})`;
}

function changeColor(cellId) {
  let cell = document.getElementById(cellId);
  let changedColor = getRandomRgb();
  cell.style.backgroundColor = changedColor;
}

function changeColorToBlack(cellId) {
  let cell = document.getElementById(cellId);
  let changedColor = "#000";
  cell.style.backgroundColor = changedColor;
}
