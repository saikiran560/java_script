const btn = document.querySelector("button");

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}

function changeColor() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeColor);
