const container = document.querySelector("#container");

function addGridSquares(n) {
  for (let i = 1; i <= n; i++) {
    let column = document.createElement("div");
    column.classList.add("cols");
    for (let j = 1; j <= n; j++) {
      const row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    }

    container.appendChild(column);
  }
}

container.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "teal";
});

const btn = document.querySelector("#btn");

function size() {
  container.textContent = "";
  let size = prompt("Enter the size of grid");
  size = parseInt(size);
  if (size > 100) {
    alert("Size must me less than 100");
  } else {
    addGridSquares(size);
  }
}

btn.addEventListener("click", () => {
  size();
});
