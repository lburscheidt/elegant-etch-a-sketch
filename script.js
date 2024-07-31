/*Create a global CSS variable for the size of the container in px, then create a JS variable with just the number for use in calculations in the makeGrid function*/

document.documentElement.style.setProperty("--gridWidth", "400px");

let gridWidth = window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--gridWidth")
  .replace(/[^0-9]/g, "");

/*Make initial grid so the site isn't empty when the user first goes onto it*/
makeGrid(16);

/*Set up reset button to prompt for a number of cells and erase the old grid before making a new one with the number of cells per side that the user has put in*/
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function () {
  resetGrid();
  let numberOfCells = prompt("Please enter a number between 1 and 100");
  makeGrid(numberOfCells);
});

/*Function to reset grid */
function resetGrid() {
  var cells = document.getElementsByClassName("cell");
  while (cells[0]) {
    cells[0].parentNode.removeChild(cells[0]);
  }
}

/*function to make cells with dimensions calculated from the gridWidth variable from above and inject them into the DOM using flexbox*/
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
      newCell.setAttribute("id", `${i + 1}XXX${j + 1}`);
      newCell.addEventListener("mouseenter", function () {
        changeColor(newCell.id);
      });
      grid.appendChild(newCell);
    }
  }
}
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  /*var a = current color's a +0.1*/
  return `rgba(${r}, ${g},${b})`
}

function changeColor(cellId) {
  let cell = document.getElementById(cellId);
  let changedColor = getRandomRgb();
  cell.style.backgroundColor = changedColor;
}


var singleCell=document.getElementById(cellId);
var style=window.getComputedStyle(singleCell,"");
var bgColor=style.getPropertyValue("background-color");