let innerBoxes = document.querySelectorAll(".inner");

// Just making boxes clickable

// for (let i = 0; i < innerBoxes.length; i++) {
//   console.log(innerBoxes[i]);
// }

function clickBox() {
  this.classList.add("has-ex");

  innerBoxes = Array.from(innerBoxes);
  console.log(innerBoxes);

  // let randBox = innerBoxes[Math.floor(Math.random() * innerBoxes.length)];
  // randBox.classList.add("has-circle");
}

innerBoxes.forEach(box => box.addEventListener("click", clickBox));
