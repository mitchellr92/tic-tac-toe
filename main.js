const innerBoxes = document.querySelectorAll(".inner");

// Just making boxes clickable

function clickBox() {
  console.log("box has been clicked!");
  this.classList.add("has-ex");
}

innerBoxes.forEach(box => box.addEventListener("click", clickBox));
