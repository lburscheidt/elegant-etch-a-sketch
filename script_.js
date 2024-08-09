const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.setAttribute("id", `${i + 1}-${j + 1}`);
    newCell.addEventListener("mouseenter", function () {
      changeColor(newCell.id);
    });
    grid.appendChild(newCell);
  }
};
/*
/*make resetbutton usable in JS */
let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function(){
  let number = prompt("Please enter a number";);
  newGrid(number);
};)
/*when the button is clicked, open a prompt window to ask for a number */

/*pass that number into the newGrid function as the argument */

/*wrap grid creation in a function that takes a number as argument*/


function newGrid(num){
  /*add a function that removes the old grid at the start */
  grid.removeChild();
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
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
  cell.classList.remove("cell");
  cell.classList.add("cell-changed");
}
