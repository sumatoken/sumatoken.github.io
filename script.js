const linearControls = document.getElementsByClassName("linear-control");
let index = 0;
const increment = 10;
const delay = 30;
let direction = 1;

function animate() {
  if (index > 900) {
    direction = -1;
  } else if (index < 0) {
    direction = 1;
  }

  index += direction * increment;

  Array.from(linearControls).forEach((linearControl) => {
    linearControl.setAttribute("x1", index);
  });

  setTimeout(animate, delay);
}

animate();

console.log("script.js");
