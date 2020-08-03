export function setCoordinates(x_pos, y_pos, d) {
  d.style.position = 'absolute';
  d.style.left = x_pos + 'px';
  d.style.top = y_pos + 'px';
}
