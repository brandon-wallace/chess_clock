"use strict";

let seconds = 60;
let p1sec = 60;
let playing = true;
let currentPlayer = 1; // player1: 1, player2: 2
let increaseP1Time = document.getElementById('p1-min');
let decreaseP1Time = document.getElementById('p1-min');
let increaseP2Time = document.getElementById('p2-min');
let decreaseP2Time = document.getElementById('p2-min');
let resetbtn = document.getElementById('reset-btn');
let startbtn = document.getElementById('start-btn');
let pausebtn = document.getElementById('pause-btn');
let swapbtn = document.getElementById('swapplayer-btn');


// Set player1's time.
function increaseP1() {
  let min = document.getElementById('p1-min').innerHTML;
  min = parseInt(min, 10) + 1;
  if (min >= 99) {
      min = 99;
  }
  if (min < 10) {
    min = '0' + min;
  }
  increaseP1Time.innerHTML = min;
}


function decreaseP1() {
  let min = document.getElementById('p1-min').innerHTML;
  min = parseInt(min, 10) - 1;
  console.log(min);
  if (min <= 1) {
      min = 1;
  }
  if (min < 10) {
    min = '0' + min;
  }
  decreaseP1Time.innerHTML = min;
}


// Set player2's time.
function increaseP2() {
  let min = document.getElementById('p2-min').innerHTML;
  min = parseInt(min, 10) + 1;
  if (min >= 99) {
      min = 99;
  }
  if (min < 10) {
    min = '0' + min;
  }
  increaseP2Time.innerHTML = min;
}


function decreaseP2() {
  let min = document.getElementById('p2-min').innerHTML;
  min = parseInt(min, 10) - 1;
  if (min <= 1) {
      min = 1;
  }
  if (min < 10) {
    min = '0' + min;
  }
  decreaseP2Time.innerHTML = min;
}


// Reset Player's clocks.
function reset() {
  document.getElementById('timeout1').style.color = "#000000";
  document.getElementById('timeout2').style.color = "#FFFFFF";
  let p1Time = document.getElementById('p1-min');
  p1Time.innerHTML = 10;
  let p1Sec =  document.getElementById('p1-sec');
  p1Sec.innerHTML = '00';
  let p2Time = document.getElementById('p2-min');
  p2Time.innerHTML = 10;
  let p2Sec =  document.getElementById('p2-sec');
  p2Sec.innerHTML = '00';
}


// Start the clock.
function start() {
        
    if (currentPlayer == 1) {
    let countdown = setInterval(function() {
        // Disable buttons while clock runs.
        resetbtn.disabled = true;
        startbtn.disabled = true;
        // Disable functions while clock runs.
        increaseP1 = null;
        decreaseP1 = null;

        let p1Minutes = document.getElementById('p1-min').innerHTML;
        p1Minutes = parseInt(p1Minutes, 10);
        if (seconds == 60) {
            p1Minutes = p1Minutes - 1;
            document.getElementById('p1-min').innerHTML = p1Minutes;
        }
        seconds--;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        document.getElementById('p1-sec').innerHTML = seconds;

        seconds = parseInt(seconds, 10);

        if (p1Minutes < 10) {
            p1Minutes = '0' + p1Minutes;
        }
        document.getElementById('p1-min').innerHTML = p1Minutes;

        p1Minutes = parseInt(p1Minutes, 10);

        if (p1Minutes === 0 && seconds === 0) {
            document.getElementById('timeout1').style.color = "#ff0000";
            clearInterval(countdown);
            resetbtn.disabled = false;
            startbtn.disabled = false;
        }
        if (seconds === 0) {
            seconds = 60;
        }

        document.onkeydown = function(event) {
        let spacebar = event.which || event.keyCode;
            if (spacebar === 32) {
                console.log("SPACEBAR PRESSED!");
                currentPlayer = currentPlayer == 1 ? 2 : 1;
                // console.log({currentPlayer});
                clearInterval(countdown);
                /*
            } else { 
                start();
                */
            }
        };

    }, 1000);
    } else {
        player2Time();
    }
}


function player2Time() {
    if (currentPlayer == 2) {
    let countdown = setInterval(function() {
        resetbtn.disabled = true;
        startbtn.disabled = true;
        increaseP1 = null;
        decreaseP1 = null;

        let p2Minutes = document.getElementById('p2-min').innerHTML;
        p2Minutes = parseInt(p2Minutes, 10);
        console.log({p2Minutes});
        if (seconds == 60) {
            p2Minutes = p2Minutes - 1;
            document.getElementById('p2-min').innerHTML = p2Minutes;
        }
        seconds--;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        document.getElementById('p2-sec').innerHTML = seconds;

        seconds = parseInt(seconds, 10);

        if (p2Minutes < 10) {
            p2Minutes = '0' + p2Minutes;
        }
        document.getElementById('p2-min').innerHTML = p2Minutes;

        p2Minutes = parseInt(p2Minutes, 10);

        console.log({p2Minutes, seconds});

        if (p2Minutes === 0 && seconds === 0) {
            document.getElementById('timeout2').style.color = "#ff0000";
            clearInterval(countdown);
            resetbtn.disabled = false;
            startbtn.disabled = false;
        }
        if (seconds === 0) {
            seconds = 60;
        }
        document.onkeydown = function(event) {
        let spacebar = event.which || event.keyCode;
            if (spacebar === 32) {
                console.log("SPACEBAR PRESSED!");
                currentPlayer = currentPlayer == 1 ? 2 : 1;
                console.log({currentPlayer});
                clearInterval(countdown);
            } else { 
                start();
            }
        };
    }, 1000);
    }
}


/*
function stop() {
    console.log({stop});
    console.log("PAUSED?");
    clearInterval(countdown);
    pausebtn.innerHTML = 'start';
}
*/
