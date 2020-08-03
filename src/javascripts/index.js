import { drawShape } from "./drawHtmlElement/drawShape";
import _ from "lodash";
import { roundPrecised } from "./roundPrecised";

const canvas = document.getElementById("canvas");
const startBtn = document.getElementById("startBtn");
const scoreDisplayer = document.getElementById("scores");
const SHAPE_DISPLAY_NUMBER = 8;
let reactionTimeStart = 0;
let date;
let reactionTimes = [];
let currentTry = 0;
let reactionTimeEnd = 0;

// --------------------
startBtn.addEventListener("click", function () {
  date = new Date();
  reactionTimeStart = date.getTime();
  drawShape(canvas);
  startBtn.classList.add("invisible");
});

//--------------------
canvas.addEventListener("click", function () {
  if (currentTry < SHAPE_DISPLAY_NUMBER) {
    date = new Date();
    reactionTimeEnd = date.getTime();
    reactionTimes[currentTry] = reactionTimeEnd - reactionTimeStart;
    reactionTimeStart = reactionTimeEnd;
    currentTry++;

    scoreDisplayer.innerHTML =
      "Best: " + _.min(reactionTimes) +
      ",  Worst: " + _.max(reactionTimes) +
      ",  Avg: " +  roundPrecised(_.mean(reactionTimes),2) +
      ",  Sum: " + _.sum(reactionTimes);

    if (currentTry < SHAPE_DISPLAY_NUMBER) {
      drawShape(canvas);
    } else {
      canvas.classList.add("invisible");
    }

  }
});