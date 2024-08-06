const container = document.querySelector("#container");

// function addGrid() {
//   const newDiv = document.createElement("div");
//   const newText = document.createTextNode("hi there");
//   newDiv.appendChild(newText);
//   container.appendChild(newDiv).classList.add("red");
// }

// addGrid();
let n = 5;
function addGridSquares() {
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 1; j <= n; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("cols");
      container.appendChild(newDiv);
    }
  }
}

addGridSquares();

container.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "blue";
});
