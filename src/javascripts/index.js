import { drawShape } from "./drawHtmlElement/drawShape";
import _ from "lodash";
import { roundPrecised } from "./roundPrecised";
import { Game } from "../module-game/game-module-v2";
import { Persistence } from "../module-persistence/persistence";

const canvas = document.getElementById("canvas");
const scoreTable = document.getElementById("scoreTable");
const startBtn = document.getElementById("startBtn");
const scoreDisplayer = document.getElementById("scores");
const nameForm = document.getElementById("username");
let username = document.getElementById("name");

let persistence = new Persistence();
const SHAPE_DISPLAY_NUMBER = 8;
let reactionTimeStart = 0;
let date;

let reactionTimes = [];
let currentTry = 0;
let reactionTimeEnd = 0;
let game = new Game("Reaction time game", SHAPE_DISPLAY_NUMBER);

// --------------------
startBtn.addEventListener("click", function () {
  if (persistence.get(username.value) == null) {
    persistence.put(username.value, 0);
  }
  date = new Date();
  reactionTimeStart = date.getTime();
  drawShape(canvas);
  startBtn.classList.add("invisible");
  nameForm.classList.add("invisible");
});
//--------------------
canvas.addEventListener("click", function () {
  if (currentTry < SHAPE_DISPLAY_NUMBER) {
    date = new Date();
    reactionTimeEnd = date.getTime();
    reactionTimes[currentTry] = reactionTimeEnd - reactionTimeStart;
    reactionTimeStart = reactionTimeEnd;
    currentTry++;
    saveScores();
    scoreDisplayer.innerHTML =
      "Username: " +
      username.value +
      "| This session Best: " +
      _.min(reactionTimes) +
      "| Player Best: " +
      persistence.get(username.value) +
      "| Sum: " +
      _.sum(reactionTimes);

    if (currentTry < SHAPE_DISPLAY_NUMBER) {
      drawShape(canvas);
    } else {
      saveScores();
      canvas.classList.add("invisible");
      let players = getPlayers();
      showScores(players);
    }
  }
});

function saveScores() {
  if (
    _.min(reactionTimes) < persistence.get(username.value) ||
    persistence.get(username.value) == 0
  ) {
    persistence.put(username.value, _.min(reactionTimes));
  }
}

function getPlayers() {
  let players = [];

  for (let i = 0, len = localStorage.length; i < len; ++i) {
    players.push(localStorage.key(i));
  }

  return players;
}

function showScores(players) {
  let scores = [];
  players.sort();

  for (let i = 0; i < players.length - 1; i++) {
    scores.push(localStorage.getItem(players[i]));
    scoreTable.innerHTML += players[i] + ": " + scores[i] + "<br>";
  }
}
