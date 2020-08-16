import { getRandomInt } from '../utils/get-random-int';
export function getRandomCoordinateX(size) {
  return getRandomInt(60, screen.width - size - 30);
}
export function getRandomCoordinateY(size) {
  return getRandomInt(60, screen.height - 2 * size);
}
