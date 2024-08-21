const sketchArea = document.querySelector(".sketch-area");
const adjustButton = document.querySelector(".adjust-button");
const resetButton = document.querySelector(".reset-button");

function createSquare() {
  const square = document.createElement("div");
  square.className = "square";
  return square;
}

function addHoverEffect() {
  document.querySelectorAll(".square").forEach((div) => {
    div.addEventListener("mouseover", (event) => {
      div.style.backgroundColor = "black";
    });
  });
}

function resetSketchArea() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((r) => sketchArea.removeChild(r));
}

function generateGrids(grids) {
  resetSketchArea();

  for (let i = 0; i < grids; i++) {
    const row = document.createElement("div");
    row.className = "row";
    sketchArea.appendChild(row);

    for (let j = 0; j < grids; j++) {
      const square = createSquare();
      row.appendChild(square);
    }
  }
  addHoverEffect();
}

function getNumberOfGridsPerSide() {
  const answer = Number(prompt("Enter a number between 1-100"));
  if ((answer && answer < 1) || answer > 100) {
    getNumberOfGridsPerSide();
  }
  return answer;
}

adjustButton.addEventListener("click", (event) => {
  const gridsPerSide = getNumberOfGridsPerSide();
  if (gridsPerSide) {
    generateGrids(gridsPerSide);
  }
});

resetButton.addEventListener("click", () => {
  resetSketchArea();
  generateGrids(16);
});

generateGrids(16);
