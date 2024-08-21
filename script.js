const sketchArea = document.querySelector(".sketch-area");
const adjustButton = document.querySelector(".adjust-button");
const resetButton = document.querySelector(".reset-button");
const changeColorButton = document.querySelector(".change-color-button");

let isColored = false;

function generateRandomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function createSquare() {
  const square = document.createElement("div");
  square.className = "square";
  return square;
}

function addHoverEffect() {
  document.querySelectorAll(".square").forEach((div) => {
    div.addEventListener("mouseover", (event) => {
      if (div.style.backgroundColor) {
        div.style.opacity = parseFloat(div.style.opacity) + 0.1;
      } else {
        div.style.backgroundColor = isColored ? generateRandomRGB() : "#000000";
        div.style.opacity = 0.1;
      }
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

changeColorButton.addEventListener("click", () => {
  changeColorButton.textContent = isColored
    ? "change to colored pen"
    : "change to black&white pen";
  isColored = !isColored;
});

generateGrids(16);
