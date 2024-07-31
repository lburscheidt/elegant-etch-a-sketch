/*1. Get user input and store in a variable
2. Calculate cell width = grid with / user input
3. Create grid with event listeners as per v1*/
makeGrid(16);

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function () {
  const numberOfcells = prompt("Please enter a number");
  makeGrid(numberOfCells);
});

function genHexString(len) {
  const hex = "0123456789ABCDEF";
  let hexString = "#";
  for (let i = 0; i < len; ++i) {
    hexString += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return hexString;
}

function makeGrid(number) {
  const calc = 480 / number;
  const cellWidth = `${calc}px`;
  console.log(cellWidth);
  document.documentElement.style.setProperty("--cellWidth", cellWidth);

  const grid = document.querySelector(".grid");

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      const newCell = document.createElement("div");
      newCell.classList.add("cell");
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
  cell.style.backgroundColor = genHexString(6);
  cell.style.opacity += 0.1;
}
