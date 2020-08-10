import { drawShape } from "./drawHtmlElement/drawShape";
import _ from "lodash";
import { roundPrecised } from "./roundPrecised";
import { Player } from "../module-game/player-module-v2";
import { Game } from "../module-game/game-module-v2";
import { Persistence } from "../module-persistence/persistence";
import { toggleActivePlayer as changeActivePlayerColor } from "../module-game/toggle-active-player";

const canvas = document.getElementById("canvas");
const startBtn = document.getElementById("startBtn");
const scoreDisplayer = document.getElementById("scores");
var username = document.getElementById("name");

const persistence = new Persistence();
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
      saveScores();
      canvas.classList.add("invisible");
    }

  }
});

function saveScores (){
  persistence.put(username.value, 
      "Best: " + _.min(reactionTimes) +
      ",  Worst: " + _.max(reactionTimes) +
      ",  Avg: " +  roundPrecised(_.mean(reactionTimes),2) +
      ",  Sum: " + _.sum(reactionTimes));
}