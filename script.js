const sketchArea = document.querySelector(".sketch-area");

let x = 16;
let y = 16;

function createSquare() {
  const square = document.createElement("div");
  square.className = "square";
  return square;
}

for (let i = 0; i < y; i++) {
  const row = document.createElement("div");
  row.className = "row";
  sketchArea.appendChild(row);

  for (let j = 0; j < x; j++) {
    const square = createSquare();
    row.appendChild(square);
  }
}

const square = document.querySelectorAll(".square").forEach((div) => {
  div.addEventListener("mouseover", (event) => {
    div.style.backgroundColor = "black";
  });
});
