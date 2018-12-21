"use-strict";


let min1 = Number(document.getElementById("minutes1").innerHTML);
let min2 = Number(document.getElementById("minutes2").innerHTML);
let beep = new Audio('audio/start.mp3');
let playing = true;


const padZero = (n) => {
  if (n < 10) {
    return '0' + n;
  }
  return n;
}


const openModal = () => {
  document.querySelector(".modal").style.display = "flex";
}


const increaseTimeP1 = () => {
  console.log(min1);
  if (min1 === 99) {
    min1 = 98;
  }
  min1 += 1;
  document.getElementById("minutes1").innerHTML = padZero(min1);
}


const decreaseTimeP1 = () => {
  if (min1 === 1) {
    min1 = 2;
  }
  min1 -= 1;
  document.getElementById("minutes1").innerHTML = padZero(min1);
}


const increaseTimeP2 = () => {
  if (min2 === 99) {
    min2 = 98;
  }
  min2 += 1;
  document.getElementById("minutes2").innerHTML = padZero(min2);
}


const decreaseTimeP2 = () => {
  if (min2 === 1) {
    min2 = 2;
  }
  min2 -= 1;
  document.getElementById("minutes2").innerHTML = padZero(min2);
}


const closeModal = () => {
  document.querySelector(".min1").innerHTML = padZero(min1);
  document.querySelector(".min2").innerHTML = padZero(min2);
  document.querySelector(".modal").style.display = "none";
}


let swap = () => {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
}


const reset = () => {

}


const start = () => {
  playing = true;
  beep.play();
  let timeout = new Audio('audio/timeout.mp3');
  let timer = setInterval(function() {
    if (currentPlayer === 0) {
      if (playing === true) {

      }
    }
  }
} else {
  if (currentPlayer === 1) {
    console.log("PLAYER 2");
    document.getElementById("swap").addEventListener("click", swap);
  }
}
