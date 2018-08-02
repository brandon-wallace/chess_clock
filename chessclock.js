
var sec = 0;

var playing = false;
var dft = document.getElementById('p1-min');
var increaseP1Time = document.getElementById('p1-min');
var decreaseP1Time = document.getElementById('p1-min');
var increaseP2Time = document.getElementById('p2-min');
var decreaseP2Time = document.getElementById('p2-min');
var rstbtn = document.getElementById('rst-btn');
var srtbtn = document.getElementById('strt-btn');



// Player buttons
function increaseP1() {
  min = document.getElementById('p1-min').innerHTML;
  min = parseInt(min, 10) + 1;
  if (min < 10) {
    min = '0' + min;
  }
  increaseP1Time.innerHTML = min;
}


function decreaseP1() {
  min = document.getElementById('p1-min').innerHTML;
  min = parseInt(min, 10) - 1;
  if (min < 10) {
    min = '0' + min;
  }
  decreaseP1Time.innerHTML = min;
}



function increaseP2() {
  min = document.getElementById('p2-min').innerHTML;
  min = parseInt(min, 10) + 1;
  if (min < 10) {
    min = '0' + min;
  }
  increaseP2Time.innerHTML = min;
}


function decreaseP2() {
  min = document.getElementById('p2-min').innerHTML;
  min = parseInt(min, 10) - 1;
  if (min < 10) {
    min = '0' + min;
  }
  decreaseP2Time.innerHTML = min;
}


function reset() {
  var p1Time = document.getElementById('p1-min');
  p1Time.innerHTML = 10;
  var p2Time = document.getElementById('p2-min');
  p2Time.innerHTML = 10;
}


function start() {
  var min = 10;
  var p1Time = document.getElementById('p1-min');
  p1Time.innerHTML - 1;
}


var timeId = setInterval(start, 1000);


function timeOutPlayer() {
  clearInterval(timeId);
}

/*
function stop() {
  playing = false;
}
*/

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