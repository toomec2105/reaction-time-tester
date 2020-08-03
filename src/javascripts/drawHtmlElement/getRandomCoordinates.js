import { getRandomInt } from '../utils/get-random-int';
export function getRandomCoordinateX(size) {
  return getRandomInt(20, screen.width - size);
}
export function getRandomCoordinateY(size) {
  return getRandomInt(20, screen.height - 2 * size);
}
