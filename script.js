document.documentElement.style.setProperty("--gridWidth", "400px");

let gridWidth = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--gridWidth")
  .replace(/[^0-9]/g, "");

let currentMode = "standard";

const clearBtn = document.getElementById("clear-btn");
const resetBtn = document.getElementById("reset-btn");
const discoBtn = document.getElementById("disco-btn");
const standardBtn = document.getElementById("standard-btn");
const darkBtn = document.getElementById("dark-btn");

function changeDisco() {
  clearGrid();
  currentMode = "disco";
}

function changeStandard() {
  clearGrid();
  currentMode = "standard";
}

function changeDark() {
  clearGrid();
  currentMode = "dark";
}

discoBtn.addEventListener("click", changeDisco);

standardBtn.addEventListener("click", changeStandard);

darkBtn.addEventListener("click", changeDark);

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

clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

resetBtn.addEventListener("click", function () {
  resetGrid();
  let numberOfCells = prompt("Please enter a number between 1 and 100");
  if (numberOfCells == null) {
    makeGrid(16);
  } else {
    makeGrid(numberOfCells);
  }
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
  let changedColor;
  let cell = document.getElementById(cellId);
  if (currentMode == "standard") {
    changedColor = "#000";
    cell.style.backgroundColor = changedColor;
  } else if (currentMode == "disco") {
    changedColor = getRandomRgb();
    cell.style.backgroundColor = changedColor;
  } else {
    changeOpacity(cellId);
  }
}

function changeOpacity(cellId) {
  let changedOpacity;
  let cell = document.getElementById(cellId);
  cell.style.backgroundColor = "#000";
  let currentOpacity = cell.style.opacity;
  changedOpacity = currentOpacity -= '-0.1';
  console.log(changedOpacity);
cell.style.opacity = changedOpacity;
  
}
