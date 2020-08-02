import { getRandomColor } from './getRandomColor';
import { getRandomCoordinateX, getRandomCoordinateY } from './getRandomCoordinates';
import { setCoordinates } from './setCoordinates';
import { getRandomBorderRadius } from './getRandomBorderRadius';

export function drawShape(size, canvasId) {
  let x = 0;
  let y = 0;
  x = getRandomCoordinateX(size);
  y = getRandomCoordinateY(size);

  canvasId.style.backgroundColor = getRandomColor(); 
  canvasId.style.width = size + "px";
  canvasId.style.height = size + "px";
  canvasId.style.borderRadius = getRandomBorderRadius() + "%";
  canvasId.classList.add("shape");
  setCoordinates(x, y, canvasId);
}

