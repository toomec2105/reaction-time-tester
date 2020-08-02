import { getRandomInt } from '../utils/get-random-int';
export function getRandomBorderRadius() {
  if (getRandomInt(0, 2) == 1) {
    return 50;
  }
  else {
    return 0;
  }
}
