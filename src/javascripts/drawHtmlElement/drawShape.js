import { getRandomColor } from './getRandomColor';
import { getRandomCoordinateX, getRandomCoordinateY } from './getRandomCoordinates';
import { setCoordinates } from './setCoordinates';
import { getRandomBorderRadius } from './getRandomBorderRadius';
import { getSize } from './getSize';

export function drawShape(canvasId) {
  let size = getSize();
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

