let innerBoxes = document.querySelectorAll(".inner");

// Just making boxes clickable

// for (let i = 0; i < innerBoxes.length; i++) {
//   console.log(innerBoxes[i]);
// }

function clickBox() {
  this.classList.add("has-ex");

  innerBoxes = Array.from(innerBoxes);
  let clickedBox;

  console.log(innerBoxes);
  for (let i = 0; i < innerBoxes.length; i++) {
    if (innerBoxes[i].classList.length === 3) {
      clickedBox = innerBoxes[i];
      let index = innerBoxes.indexOf(clickedBox);
      innerBoxes.splice(index, 1)
    }
  }

  let randBox = innerBoxes[Math.floor(Math.random() * innerBoxes.length)];
  randBox.classList.add("has-circle");
}

innerBoxes.forEach(box => box.addEventListener("click", clickBox));
