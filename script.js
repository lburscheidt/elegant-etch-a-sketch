/*Use the container div in the HTML to put the grid into. The size of the grid is determined by the CSS class "grid".*/

const grid = document.querySelector(".grid");

/* Create 16 x 16 grid cells using a nested for loop. */
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    /*Add the CSS class "cell" to every cell so that they are styled according to the stylesheet.*/
    cell.classList.add("cell");
    /*Add unique IDs to  each cell. The IDs are in the format "row number-column number". So the first cell on the left has the id "1-1", the last one on the right has the id "16-16".*/
    cell.setAttribute("id", `${i + 1}-${j + 1}`);
    /*Add an event listener to every cell that takes "mouseenter" as type and changeColor as callback function. */

    cell.addEventListener("mouseenter", function () {
      changeColor(cell.id);
    });

    /*Inject the finished cells into the DOM!*/
    grid.appendChild(cell);
  }
}

function changeColor(cellId) {
  let cell = document.getElementById(cellId);
  cell.classList.remove("cell");
  cell.classList.add("cell-changed");
}
