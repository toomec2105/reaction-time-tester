import { okGame } from './learning-reference/gameMessage';
import { getRandomInt } from './utils/get-random-int';
import { drawShape } from './drawHtmlElement/drawShape';
//console.log(okGame("Football")); //js import  test

const canvasTop = document.getElementById("canvasTop");
const displayer = document.getElementById("display");
let date = new Date();;
let reactionTime = 0;
let numberOfTries = 8; 
let times = new Array(8);
let counter = 0;
let _ = require("lodash");
let size = 250;

reactionTime = date.getTime();
drawShape(size, canvasTop);

canvasTop.addEventListener("click", function () {
  if(counter < numberOfTries){
  date = new Date();
  times[counter] = date.getTime() - reactionTime; 
  
  reactionTime = date.getTime();
  counter++;
  if(counter >= numberOfTries ){
    displayer.innerHTML = "Best: " + _.min(times) + ",  Worst: " + _.max(times) + ",  Avg: " + _.mean(times);
   
  }else{
    drawShape(size, canvasTop);
  }
  }
});

















function setCoordinates(x_pos, y_pos, d) {
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}