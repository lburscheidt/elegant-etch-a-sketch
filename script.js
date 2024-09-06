const clearBtn = document.getElementById("clear-btn");
const darkBtn = document.getElementById("dark-btn");
const discoBtn = document.getElementById("disco-btn");
const resetBtn = document.getElementById("reset-btn");
const standardBtn = document.getElementById("standard-btn");

clearBtn.addEventListener("click", clearGrid);
darkBtn.addEventListener("click", changeDark);
discoBtn.addEventListener("click", changeDisco);
resetBtn.addEventListener("click", resetGrid);
standardBtn.addEventListener("click", changeStandard);

document.documentElement.style.setProperty("--gridWidth", "400px");

let gridWidth = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--gridWidth")
  .replace(/[^0-9]/g, "");

let currentMode = "standard";

function changeDark() {
  clearGrid();
  currentMode = "dark";
}

function changeDisco() {
  clearGrid();
  currentMode = "disco";
}

function changeStandard() {
  clearGrid();
  currentMode = "standard";
}

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
}

makeGrid(16);

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
    cell.style.border = "1px solid black";
    cell.style.opacity = "1.0";
  });
}

function resetGrid() {
  var cells = document.getElementsByClassName("cell");
  while (cells[0]) {
    cells[0].parentNode.removeChild(cells[0]);
  }
  let numberOfCells = prompt("Please enter a number between 1 and 100");
  if (numberOfCells == null) {
    makeGrid(16);
  } else {
    makeGrid(numberOfCells);
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
    let bgCol = cell.style.backgroundColor;
    let currentAlpha = parseFloat(bgCol.split(",")[3]);
    let updatedAlpha = Number(currentAlpha) + 0.1;
    if (currentAlpha < 1.0) {
      cell.style.backgroundColor = `rgba(0,0,0,${updatedAlpha})`;
    } else {
      cell.style.backgroundColor = `rgba(0,0,0,0.1)`;
    }
  }
}
