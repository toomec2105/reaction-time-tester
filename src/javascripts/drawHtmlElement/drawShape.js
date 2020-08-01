import { getRandomInt } from '../utils/get-random-int';

export function drawShape(size, canvasId) {
  let x = 0;
  let y = 0;
  x = getRandomCoordinateX(size);
  y = getRandomCoordinateY(size);

  canvasId.style.backgroundColor = getRandomColor(); 
  canvasId.style.width = size + "px";
  canvasId.style.height = size + "px";
  canvasId.style.borderRadius = getRandomShape() + "%";
  canvasId.classList.add("shape");
  setCoordinates(x, y, canvasId);
}
function getRandomCoordinateX(size){
  return getRandomInt(0, screen.width - 2 * size );
}

function getRandomCoordinateY(size){
  return getRandomInt(0, screen.height - 2 * size );
}

function getRandomColor(){
  let index = getRandomInt(0, 6);
  let colors = ["red","green", "lightblue", "yellow", "black", "purple"];
  return colors[index];
}

function getRandomShape(){
  if (getRandomInt(0, 2) == 1) {
    return 50;
  }else{
    return 0;
  }
}

function setCoordinates(x_pos, y_pos, d) {
  d.style.position = "absolute";
  d.style.left = x_pos + 'px';
  d.style.top = y_pos + 'px';
}
