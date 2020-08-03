export function roundPrecised(number, precision) {
  var power = Math.pow(10, precision);

  return Math.round(number * power) / power;
}
