import { drawShape } from './drawHtmlElement/drawShape';
import _ from 'lodash';

const canvas = document.getElementById("canvas");
const startBtn = document.getElementById("startBtn");
const scoreDisplayer = document.getElementById("scores");
const SHAPE_DISPLAY_NUMBER = 8;
let date = new Date();
let reactionTimeStart = 0;
let results = new Array(8); 
let currentTry = 0;
let reactionTimeEnd = 0;

// --------------------
startBtn.addEventListener("click", function () {
  reactionTimeStart = date.getTime();
  drawShape(canvas);
  startBtn.classList.add(invisible);
});

//--------------------
canvas.addEventListener("click", function () {
  if(currentTry < SHAPE_DISPLAY_NUMBER){
    date = new Date();
    reactionTimeEnd = date.getTime();
    results[currentTry] = reactionTimeEnd - reactionTimeStart; 
    reactionTimeStart = reactionTimeEnd;
    currentTry++;
    scoreDisplayer.innerHTML = "Best: " + _.min(results) + ",  Worst: " + _.max(results) + ",  Avg: " + _.mean(results)+ ",  Sum: " + _.sum(results);
    if(currentTry < SHAPE_DISPLAY_NUMBER ){
      drawShape(canvas);
    }
  }
});