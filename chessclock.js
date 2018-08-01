var sec = 0;
var min = 10;
var playing = false;

var increaseP1Time = document.getElementById('p1-min');
var decreaseP1Time = document.getElementById('p1-min');
var increaseP2Time = document.getElementById('p2-min');
var decreaseP2Time = document.getElementById('p2-min');
var rstbtn = document.getElementById('rst-btn');

// Player buttons
function increaseP1() {
  min += 1;
  console.log(typeof min);
  increaseP1Time.innerHTML = min;
}

function decreaseP1() {
  min -= 1;
  console.log(typeof min);
  decreaseP1Time.innerHTML = min;
}

function increaseP2() {
  min += 1;
  increaseP2Time.innerHTML = min;
}

function decreaseP2() {
  min -= 1;
  decreaseP2Time.innerHTML = min;
}
// END Player buttons

function countdown() {
  var p1Time = document.getElementById('p1-min');
  p1Time -= 1;
  p1Time.innerHTML = min;
  if (p1Time == 0) {
    p1Time.innerHTML = "00";
    timeOutPlayer();
  }
}


var timeId = setInterval(countdown, 1000);

function timeOutPlayer() {
  clearInterval(timeId);
}

// setTimeout(timeOutPlayer, 3000);

function reset() {
  var p1Time = document.getElementById('p1-min');
  p1Time.innerHTML = 10;
  var p2Time = document.getElementById('p2-min');
  p2Time.innerHTML = 10;
}

function start() {
  playing = true;
  countdown();
}
  

function stop() {
  playing = false;
}
  




function switchPlayer() {
  /*
  document.onkeydown = function(event) {
    if (event) {
      if (event.keyCode == 32 || event.which == 32) {
        if (status == 1) {
          stop();
        } else {
          start();
        }
      }
    }
  }
  */
}