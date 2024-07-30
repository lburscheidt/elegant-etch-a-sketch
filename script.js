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
}

function changeColor(cellId) {
  let cell = document.getElementById(cellId);
  cell.classList.remove("cell");
  cell.classList.add("cell-changed");
}
