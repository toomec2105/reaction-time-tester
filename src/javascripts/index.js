import { drawShape } from './drawHtmlElement/drawShape';

const canvasTop = document.getElementById("canvasTop");
const displayer = document.getElementById("display");
const _ = require("lodash");
const numberOfTries = 8; 
let date = new Date();;
let reactionTime = 0;
let times = new Array(8);
let counter = 0;

reactionTime = date.getTime();
drawShape(canvasTop);

canvasTop.addEventListener("click", function () {
  if(counter < numberOfTries){
  date = new Date();
  times[counter] = date.getTime() - reactionTime; 
  
  reactionTime = date.getTime();
  counter++;
  if(counter >= numberOfTries ){
    displayer.innerHTML = "Best: " + _.min(times) + ",  Worst: " + _.max(times) + ",  Avg: " + _.mean(times);
  }else{
    drawShape(canvasTop);
  }
  }
});

















function setCoordinates(x_pos, y_pos, d) {
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}