require("./css/style.css");
require("./index.html");
require("./quotes.html");
require("./links.html");
require("./about.html");
require("./audio/beep-06.mp3");
require("./images/favicon.svg");
require("./audio/click-button-2-soundbible.com-911295385.mp3");
require("./audio/time-bomb-short-soundbible.com-1562499525.mp3");


"use strict";


let p1sec = 60;
let p2sec = 60;
let playing = false;
let currentPlayer = 0;
const beep = new Audio('audio/beep-06.mp3');
const panel = document.querySelector(".players");
const startbtn = document.querySelector(".start-btn");
const pausebtn = document.querySelector(".pause-btn");
const setTimebtn = document.querySelector(".set-time-btn");
let min1 = Number(document.getElementById("minutes1").innerHTML);
let min2 = Number(document.getElementById("minutes2").innerHTML);


// Add a leading zero if number is less than 10.
const padZero = (n) => {
  if (n < 10) {
    return '0' + n;
  }
  return n;
}


// Open modal window.
const openModal = () => {
  document.querySelector(".modal").style.display = "flex";
}
window.openModal = openModal;


// Increase time for player 1.
const increaseTimeP1 = () => {
  if (min1 === 99) {
    min1 = 98;
  }
  min1 += 1;
  document.getElementById("minutes1").innerHTML = padZero(min1);
}
window.increaseTimeP1 = increaseTimeP1;


// Decrease time for player 2.
const decreaseTimeP1 = () => {
  if (min1 === 1) {
    min1 = 2;
  }
  min1 -= 1;
  document.getElementById("minutes1").innerHTML = padZero(min1);
}
window.decreaseTimeP1 = decreaseTimeP1;


// Increase time for player 2.
const increaseTimeP2 = () => {
  if (min2 === 99) {
    min2 = 98;
  }
  min2 += 1;
  document.getElementById("minutes2").innerHTML = padZero(min2);
}
window.increaseTimeP2 = increaseTimeP2;


// Decrease time for player 2.
const decreaseTimeP2 = () => {
  if (min2 === 1) {
    min2 = 2;
  }
  min2 -= 1;
  document.getElementById("minutes2").innerHTML = padZero(min2);
}
window.decreaseTimeP2 = decreaseTimeP2;


// Close modal window.
const closeModal = () => {
  document.querySelector(".modal").style.display = "none";
}
window.closeModal = closeModal;


// Close modal window and set time.
const updateTime = () => {
  document.getElementById("min1").innerHTML = padZero(min1);
  document.getElementById("min2").innerHTML = padZero(min2);
  document.querySelector(".modal").style.display = "none";
}
window.updateTime = updateTime;


// Switch from player 1 to player 2 and vice versa.
const swap = () => {
  if (!playing) return; // Do not swap player clock while not playing or paused.
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  const playerSwap = new Audio('audio/click-button-2-soundbible.com-911295385.mp3');
  playerSwap.play();
}


// Three buttons in one (PAUSE, RESUME, RESET).
// Pause the countdown and switch button label to 'RESUME'.
// Resume the countdown and swith button label to 'PAUSE'.
// Label changes to 'RESET' when countdown reaches zero.
const pauseResumeReset = (resetFlag) => {
  if (!resetFlag) {
    playing = !playing; // Swap true and false or false to true.
    if (playing) {
      pausebtn.innerHTML = "PAUSE";
      pausebtn.blur();
    } else {
      pausebtn.innerHTML = "RESUME";
      pausebtn.blur();
    }
  } else {
    document.querySelectorAll(".numbers")[0].style.color = "#000000";
    document.querySelectorAll(".numbers")[1].style.color = "#FFFFFF";
    document.getElementById("sec1").innerHTML = '00';
    document.getElementById("sec2").innerHTML = '00';
    document.getElementById("min1").innerHTML = 10;
    document.getElementById("min2").innerHTML = 10;
    pausebtn.innerHTML = "PAUSE";
    setTimebtn.disabled = false;
    startbtn.disabled = false;
    currentPlayer = 0;
  }
}
window.pauseResumeReset = pauseResumeReset;


// Create a class.
class Clock {
  constructor(plr, min) {
    this.plr = plr;
    this.min = min;
    this.sec = 60;
  }

  getMinutes(timeId) {
    return document.getElementById(timeId).innerHTML;
  }
}

// Create an instance of the clock for each player from the Clock class.
let p1time = new Clock('min1', document.getElementById('min1').innerHTML);
let p2time = new Clock('min2', document.getElementById('min2').innerHTML);


// Start the clocks ticking.
const start = () => {
  startbtn.blur(); // Remove focus from button.
  playing = true;
  beep.play();
  let timeout = new Audio('audio/time-bomb-short-soundbible.com-1562499525.mp3');
  let timer = setInterval(function() {

    if (currentPlayer === 0) {

      if (playing) {
        startbtn.disabled = true;
        setTimebtn.disabled = true;
        p1time.min = parseInt(p1time.getMinutes('min1'), 10);

        if (p1sec === 60) {
          p1time.min = p1time.min - 1;
        }
        p1sec = p1sec - 1;
        document.getElementById('sec1').innerHTML = padZero(p1sec);
        document.getElementById('min1').innerHTML = padZero(p1time.min);

        if (p1sec === 0) {
          if (p1sec === 0 && p1time.min === 0) {
            pausebtn.innerHTML = "RESET";
            document.querySelectorAll(".numbers")[0].style.color = "#FF0000";
            timeout.play();
            clearInterval(timer);
            pausebtn.onclick = () => {
              pauseResumeReset("reset");
            };
            playing = false;
          }
          p1sec = 60;
        }
      }

    } else {

      if (playing) {
        p2time.min = parseInt(p2time.getMinutes("min2"), 10);

        if (p2sec === 60) {
          p2time.min = p2time.min - 1;
        }
        p2sec = p2sec - 1;
        document.getElementById('sec2').innerHTML = padZero(p2sec);
        document.getElementById('min2').innerHTML = padZero(p2time.min);

        if (p2sec === 0) {
          if (p2sec === 0 && p2time.min === 0) {
            pausebtn.innerHTML = "RESET";
            document.querySelectorAll(".numbers")[1].style.color = "#FF0000";
            timeout.play();
            clearInterval(timer);
            pausebtn.onclick = () => {
              pauseResumeReset("reset");
            };
            playing = false;
          }
          p2sec = 60;
        }
      }
    }
  }, 1000)
}
window.start = start;



// Listen for click on either player div to swap player clock.
panel.addEventListener("click", swap);

// Listen for spacebar press to swap player clock.
document.addEventListener("keypress", event => {
  if (event.keyCode === 32 || event.which === 32) {
    swap();
  }
});
