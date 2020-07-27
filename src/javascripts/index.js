import { okGame } from './learning-reference/gameMessage';
import { getRandomInt } from './utils/get-random-int'
//console.log(okGame("Football")); //js import  test

const canvas = document.getElementById("canvas");
const canvasTop = document.getElementById("canvasTop");
const canvasBot = document.querySelector("#canvasBot");

function drawShape(size, color, border_radius, canvasId,x,y) {
  canvasId.style.backgroundColor = color;
  canvasId.style.width = size + "px";
  canvasId.style.height = size + "px";
  canvasId.style.borderRadius = border_radius + "%";
  canvasId.classList.add("shape");
  setCoordinates(x,y,canvasId);
}

if(getRandomInt(0,2) == 1){
  drawShape(200, "red", 50, canvasTop, getRandomInt(0,1750),getRandomInt(0,710));
}else{
  drawShape(300, "lightblue", 0, canvasBot, getRandomInt(0,1610),getRandomInt(0,600));
}

const shape = document.querySelector(".shape");
console.log(shape);

shape.addEventListener("click", function () {
  shape.classList.add("invisible");
});

function setCoordinates(x_pos, y_pos, d) {
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}