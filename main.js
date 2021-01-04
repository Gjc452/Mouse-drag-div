var dragging = false;
var position = null;
let xxx = document.querySelector("#xxx");

xxx.addEventListener("mousedown", (e) => {
  dragging = true;
  position = [e.clientX, e.clientY];
});
xxx.addEventListener("mousemove", (e) => {
  if (dragging === false) {
    return;
  }
  const x = e.clientX;
  const y = e.clientY;
  const deltaX = x - position[0];
  const deltaY = y - position[1];
  const left = parseInt(xxx.style.left) || 0;
  const top = parseInt(xxx.style.top) || 0;
  xxx.style.left = left + deltaX + "px";
  xxx.style.top = top + deltaY + "px";
  position = [x, y];
});
xxx.addEventListener("mouseup", () => {
  dragging = false;
});
