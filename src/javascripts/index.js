import { okGame } from './learning-reference/gameMessage';

//console.log(okGame("Football")); //js import  test

let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");


circle1.addEventListener("click", function fn(e) {
   circle1.classList.add("hidden");});

circle2.addEventListener("click", function fn(e) {
   circle2.classList.add("hidden");});

function drawCircle(time, place){
  setInterval(function(){ 
    place.classList.add("visible");},time
    ); 
}

drawCircle(3000,circle1);
drawCircle(3000,circle2);

