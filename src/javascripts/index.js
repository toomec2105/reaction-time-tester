import { drawShape } from './drawHtmlElement/drawShape';
import _ from 'lodash';

const canvas = document.getElementById("canvas");
const scoreDisplayer = document.getElementById("display");
const SHAPE_DISPLAY_NUMBER = 8;
let date = new Date();
let reactionTime = 0;
let results = new Array(8); 
let currentTry = 0;

init();

// ------------------ init 
function init(){
  reactionTime = date.getTime();
  drawShape(canvas);
}


// --------------------

canvas.addEventListener("click", function () {
  if(currentTry < SHAPE_DISPLAY_NUMBER){
    date = new Date();
    results[currentTry] = date.getTime() - reactionTime; 
    reactionTime = date.getTime();
    currentTry++;
    
    if(currentTry >= SHAPE_DISPLAY_NUMBER ){
      scoreDisplayer.innerHTML = "Best: " + _.min(results) + ",  Worst: " + _.max(results) + ",  Avg: " + _.mean(results);
    }else{
      drawShape(canvas);
    }
  }
});

















function setCoordinates(x_pos, y_pos, d) {
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}