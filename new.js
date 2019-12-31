let innerBoxes = document.querySelectorAll(".inner");

// Add ex to tile
function clickBox() {
  this.classList.add("has-ex");

  innerBoxes = Array.from(innerBoxes);
  let clickedBox;
  let winner = false;

  // Removes tiles that have ex from innerBoxes array
  for (let i = 0; i < innerBoxes.length; i++) {
    if (innerBoxes[i].classList.length === 3) {
      clickedBox = innerBoxes[i];
      clickedBox.disabled = true;
      let index = innerBoxes.indexOf(clickedBox);
      innerBoxes.splice(index, 1);
    }
  }

  // Adds circle to random tile after ex has been added
  if (innerBoxes.length >= 1) {
    let randBox = innerBoxes[Math.floor(Math.random() * innerBoxes.length)];
    randBox.classList.add("has-circle");
  }

  // Removes tiles that have circle from innerBoxes array
  for (let i = 0; i < innerBoxes.length; i++) {
    if (innerBoxes[i].classList.length === 3) {
      clickedBox = innerBoxes[i];
      let index = innerBoxes.indexOf(clickedBox);
      innerBoxes.splice(index, 1);
    }
  }
  // console.log("log 2", innerBoxes);

  // Checking for win condition
  let boxesWithEx = document.querySelectorAll(".has-ex");
  boxesWithEx = Array.from(boxesWithEx);
  let boxArray = [];

  for (let i = 0; i < boxesWithEx.length; i++) {
    let boxNumber = boxesWithEx[i].classList[1];
    boxArray.push(boxNumber);
  }
  // console.log(boxArray);
  let exTiles = document.querySelectorAll(".has-ex");

  if (
    boxArray.includes("box-1") &&
    boxArray.includes("box-2") &&
    boxArray.includes("box-3")
  ) {

    let box1 = boxArray.includes("box-1");
    console.log("box1", box1);

    for (let i = 0; i < exTiles.length; i++) {
      exTiles[i].classList.add("winner-horizontal");
      console.log(exTiles[i]);
    }
    winner = true;
    // console.log("Winner!", winner);
  } else if (
    boxArray.includes("box-4") &&
    boxArray.includes("box-5") &&
    boxArray.includes("box-6")
  ) {
    for (let i = 0; i < exTiles.length; i++) {
      exTiles[i].classList.add("winner-horizontal");
      // console.log(exTiles[i]);
    }
    winner = true;
    // console.log("Winner!", winner);
  } else if (
    boxArray.includes("box-7") &&
    boxArray.includes("box-8") &&
    boxArray.includes("box-9")
  ) {
    for (let i = 0; i < exTiles.length; i++) {
      exTiles[i].classList.add("winner-horizontal");
      // console.log(exTiles[i]);
    }
    winner = true;
    // console.log("Winner!", winner);
  } else if (
    boxArray.includes("box-1") &&
    boxArray.includes("box-4") &&
    boxArray.includes("box-7")
  ) {
    for (let i = 0; i < exTiles.length; i++) {
      exTiles[i].classList.add("winner-vertical");
      console.log(exTiles[i]);
    }
    winner = true;
    console.log("Winner!", winner);
  } else if (
    boxArray.includes("box-2") &&
    boxArray.includes("box-5") &&
    boxArray.includes("box-8")
  ) {
    for (let i = 0; i < exTiles.length; i++) {
      exTiles[i].classList.add("winner-vertical");
      console.log(exTiles[i]);
    }
    winner = true;
    console.log("Winner!", winner);
  } else if (
    boxArray.includes("box-3") &&
    boxArray.includes("box-6") &&
    boxArray.includes("box-9")
  ) {
    for (let i = 0; i < exTiles.length; i++) {
      exTiles[i].classList.add("winner-vertical");
      console.log(exTiles[i]);
    }
    winner = true;
    console.log("Winner!", winner);
  } else if (
    boxArray.includes("box-3") &&
    boxArray.includes("box-5") &&
    boxArray.includes("box-7")
  ) {
    for (let i = 0; i < exTiles.length; i++) {
      exTiles[i].classList.add("winner-diagonal-right");
      console.log(exTiles[i]);
    }
    winner = true;
    console.log("Winner!", winner);
  } else if (
    boxArray.includes("box-1") &&
    boxArray.includes("box-5") &&
    boxArray.includes("box-9")
  ) {
    for (let i = 0; i < exTiles.length; i++) {
      exTiles[i].classList.add("winner-diagonal-left");
      console.log(exTiles[i]);
    }
    winner = true;
    console.log("Winner!", winner);
  }

  console.log(winner)
}

innerBoxes.forEach(box => box.addEventListener("click", clickBox));



// function miniMax(newBoard, player) {
//   let availSpots = 
// }