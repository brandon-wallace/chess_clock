"use strict";

let p1sec = 60;
let p2sec = 60;
let currentPlayer = 1; // player1: 1, player2: 2
let increaseP1Time = document.getElementById('p1-min');
let decreaseP1Time = document.getElementById('p1-min');
let increaseP2Time = document.getElementById('p2-min');
let decreaseP2Time = document.getElementById('p2-min');
let resetbtn = document.getElementById('reset-btn');
let startbtn = document.getElementById('start-btn');
let pausebtn = document.getElementById('pause-btn');
let swapbtn = document.getElementById('swap-btn');


const padZero = (number) => {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
}


// Set player1's time.
function increaseP1() {
    console.log('-----------INCREASE P1------------');
  let min = document.getElementById('p1-min').innerHTML;
  min = parseInt(min, 10) + 1;
  if (min >= 99) {
      min = 99;
  }
  increaseP1Time.innerHTML = padZero(min);
}


function decreaseP1() {
    console.log('-----------DECREASE P1------------');
  let min = document.getElementById('p1-min').innerHTML;
  min = parseInt(min, 10) - 1;
  console.log(min);
  if (min <= 1) {
      min = 1;
  }
  decreaseP1Time.innerHTML = padZero(min);
}


// Set player2's time.
function increaseP2() {
    console.log('-----------INCREASE P2------------');
  let min = document.getElementById('p2-min').innerHTML;
  min = parseInt(min, 10) + 1;
  if (min >= 99) {
      min = 99;
  }
  increaseP2Time.innerHTML = padZero(min);
}


function decreaseP2() {
    console.log('-----------DECREASE P2------------');
  let min = document.getElementById('p2-min').innerHTML;
  min = parseInt(min, 10) - 1;
  if (min <= 1) {
      min = 1;
  }
  decreaseP2Time.innerHTML = padZero(min);
}



// Reset Player's clocks.
function reset() {
    console.log('-----------RESET------------');
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


function swap() {
    console.log('----SWAPPING PLAYERS---');
    if (currentPlayer == 1) {
        currentPlayer = currentPlayer == 1 ? 2 : 1;
        clearInterval(p1Time);
    } else {
        clearInterval(p2Time);
    }
}


function p1Time() {
  // if (currentPlayer == 1) {
  clearInterval(p2Time);
  console.log({currentPlayer});
    console.log('----PLAYER 1 START---');
    let countdown1 = setInterval(function() {
      let p1min = document.getElementById('p1-min').innerHTML;
      p1min = parseInt(p1min, 10);

      if (p1sec == 60) {
          p1min = p1min - 1;
          document.getElementById('p1-min').innerHTML = p1min;
      }
      p1sec = p1sec - 1;

      document.getElementById('p1-sec').innerHTML = padZero(p1sec);
      p1sec = parseInt(p1sec, 10);

      document.getElementById('p1-min').innerHTML = padZero(p1min);
      p1min = parseInt(p1min, 10);

      if (p1min === 0 && p1sec === 0) {
          document.getElementById('timeout1').style.color = "#ff0000";
          console.log('TIMEOUT PLAYER 1');
          clearInterval(countdown1);
      }
      if (p1sec === 0) {
          p1sec = 60;
      }
      document.getElementById('swap-btn').addEventListener("click", p2Time);
    }, 1000);
  // }
}


function p2Time() {
  clearInterval(p1Time);
  console.log("SWITCHING TO PLAYER 2");
  console.log({currentPlayer});
//  if (currentPlayer == 2) {
    console.log('----PLAYER 2 START---');
    let countdown2 = setInterval(function() {
      let p2min = document.getElementById('p2-min').innerHTML;
      p2min = parseInt(p2min, 10);

      if (p2sec == 60) {
          p2min = p2min - 1;
          document.getElementById('p2-min').innerHTML = p2min;
      }
      p2sec = p2sec - 1;

      document.getElementById('p2-sec').innerHTML = padZero(p2sec);
      p2sec = parseInt(p2sec, 10);

      document.getElementById('p2-min').innerHTML = padZero(p2min);

      if (p2min === 0 && p2sec === 0) {
          document.getElementById('timeout2').style.color = "#ff0000";
          console.log('TIMEOUT PLAYER 2');
          clearInterval(countdown2);
      }
      if (p2sec === 0) {
          p2sec = 60;
      }
      document.getElementById('swap-btn').addEventListener("click", p1Time);
    }, 1000);
  // }
}


// Start the clock.
//function start() {
//    console.clear();
//    console.log('------------START CLOCK-------------'); 
//    if (currentPlayer == 1) {
//    let countdown1 = setInterval(function() {
//        // Disable buttons while clock runs.
//        resetbtn.disabled = true;
//        startbtn.disabled = true;
//        // Disable functions while clock runs.
//        increaseP1 = null;
//        decreaseP1 = null;
//
//        let p1Minutes = document.getElementById('p1-min').innerHTML;
//        p1Minutes = parseInt(p1Minutes, 10);
//        if (seconds == 60) {
//            p1Minutes = p1Minutes - 1;
//            document.getElementById('p1-min').innerHTML = p1Minutes;
//        }
//        seconds--;
//
//        if (seconds < 10) {
//            seconds = '0' + seconds;
//        }
//        document.getElementById('p1-sec').innerHTML = seconds;
//
//        seconds = parseInt(seconds, 10);
//
//        if (p1Minutes < 10) {
//            p1Minutes = '0' + p1Minutes;
//        }
//        document.getElementById('p1-min').innerHTML = p1Minutes;
//
//        p1Minutes = parseInt(p1Minutes, 10);
//
//        if (p1Minutes === 0 && seconds === 0) {
//            document.getElementById('timeout1').style.color = "#ff0000";
//            clearInterval(countdown1);
//            resetbtn.disabled = false;
//            startbtn.disabled = false;
//        }
//        if (seconds === 0) {
//            seconds = 60;
//        }
//
//        document.getElementById('swapplayer-btn').addEventListener("click", player2Time);
//
//        document.onkeydown = function(event) {
//        let spacebar = event.which || event.keyCode;
//            if (spacebar === 32) {
//                console.log("SPACEBAR PRESSED!");
//                currentPlayer = currentPlayer == 1 ? 2 : 1;
//                console.log({currentPlayer});
//                clearInterval(countdown1);
//            } else { 
//                console.log("RUNNING START AGAIN");
//                start();
//            }
//        };
//
//    }, 1000);
//    } else {
//        player2Time();
//    }
//}
//
//
//function player2Time() {
//    console.log('------------START PLAYER 2-------------');
//    clearInterval(countdown1);
//    currentPlayer = 2;
//    console.log({currentPlayer});
//    let countdown2 = setInterval(function() {
//        resetbtn.disabled = true;
//        startbtn.disabled = true;
//        increaseP1 = null;
//        decreaseP1 = null;
//
//        let p2Minutes = document.getElementById('p2-min').innerHTML;
//        p2Minutes = parseInt(p2Minutes, 10);
//        console.log({p2Minutes});
//        if (seconds == 60) {
//            p2Minutes = p2Minutes - 1;
//            document.getElementById('p2-min').innerHTML = p2Minutes;
//        }
//        seconds--;
//
//        if (seconds < 10) {
//            seconds = '0' + seconds;
//        }
//        document.getElementById('p2-sec').innerHTML = seconds;
//
//        seconds = parseInt(seconds, 10);
//
//        if (p2Minutes < 10) {
//            p2Minutes = '0' + p2Minutes;
//        }
//        document.getElementById('p2-min').innerHTML = p2Minutes;
//
//        p2Minutes = parseInt(p2Minutes, 10);
//
//        console.log({p2Minutes, seconds});
//
//        if (p2Minutes === 0 && seconds === 0) {
//            document.getElementById('timeout2').style.color = "#ff0000";
//            clearInterval(countdown2);
//            resetbtn.disabled = false;
//            startbtn.disabled = false;
//        }
//        if (seconds === 0) {
//            seconds = 60;
//        }
//
//        document.getElementById('swapplayer-btn').addEventListener("click", start);
//
//        document.onkeydown = function(event) {
//        let spacebar = event.which || event.keyCode;
//            if (spacebar === 32) {
//                console.log("SPACEBAR PRESSED!");
//                currentPlayer = currentPlayer == 1 ? 2 : 1;
//                console.log({currentPlayer});
//                clearInterval(countdown);
//            } else { 
//                start();
//            }
//        };
//    }, 1000);
//}
//
//
//
//function stop() {
//    console.log({stop});
//    console.log("PAUSED?");
//    clearInterval(countdown);
//    pausebtn.innerHTML = 'start';
//}
//
