import { getRandomColor } from './getRandomColor';
import {  getRandomCoordinateX,  getRandomCoordinateY} from './getRandomCoordinates';
import { setCoordinates } from './setCoordinates';
import { getRandomBorderRadius } from './getRandomBorderRadius';
import { getShapeSize } from './getShapeSize';

export function drawShape(canvas) {
  let size = getShapeSize();
  let xCoord = getRandomCoordinateX(size);
  let yCoord = getRandomCoordinateY(size);

  canvas.style.backgroundColor = getRandomColor();
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  canvas.style.borderRadius = getRandomBorderRadius() + '%';
  setCoordinates(xCoord, yCoord, canvas);
}