import { okGame } from './learning-reference/gameMessage';

//console.log(okGame("Football")); //js import  test

const canvas = document.getElementById("canvas");
const canvasTop = document.getElementById("canvasTop");
const canvasBot = document.querySelector("#canvasBot");

function drawShape(size, color, border_radius, canvasId) {
  canvasId.style.backgroundColor = color;
  canvasId.style.width = size + "px";
  canvasId.style.height = size + "px";
  canvasId.style.borderRadius = border_radius + "%";
  canvasId.classList.add("shape");
}

drawShape(200, "red", 50, canvasTop);
drawShape(300, "lightblue", 0, canvasBot);

const shape = document.querySelector(".shape");
console.log(shape);

shape.addEventListener("click", function () {
  shape.classList.add("invisible");
});

