import { getRandomColor } from './getRandomColor';
import { getRandomCoordinateX, getRandomCoordinateY } from './getRandomCoordinates';
import { setCoordinates } from './setCoordinates';
import { getRandomBorderRadius } from './getRandomBorderRadius';
import { getSize } from './getSize'; //shape size

export function drawShape(canvas) {
  let size = getSize();
  let xCoord = getRandomCoordinateX(size);
  let yCoord = getRandomCoordinateY(size);

  canvas.style.backgroundColor = getRandomColor(); 
  canvas.style.width = size + "px";
  canvas.style.height = size + "px";
  canvas.style.borderRadius = getRandomBorderRadius() + "%";
  canvas.classList.add("shape");
  setCoordinates(xCoord, yCoord, canvas);
}

