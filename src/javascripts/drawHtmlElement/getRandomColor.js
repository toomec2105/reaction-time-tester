import { getRandomInt } from '../utils/get-random-int';
export function getRandomColor() {
  let index = getRandomInt(0, 6);
  let colors = ["red", "green", "lightblue", "yellow", "black", "purple"];
  return colors[index];
}
