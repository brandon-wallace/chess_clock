var sec = 0;
var min = 10;
var playing = false;
var increaseP1Time = document.getElementById('p1-time');
var decreaseP1Time = document.getElementById('p1-time');


function increaseP1() {
  min += 1;
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  increaseP1Time.innerHTML = min + ':' + sec;
}

function decreaseP1() {
  min -= 1;
  if (min < 10) {
    min = '0' + min;
  }
  decreaseP1Time.innerHTML = min + ':' + sec;
}

function increaseP2() {
  min += 1;
  if (min < 10) {
    min = '0' + min;
  }
  document.getElementById('p2-time').innerHTML = min + ':' + sec;
}

function decreaseP2() {
  min -= 1;
  if (min < 10) {
    min = '0' + min;
  }
  document.getElementById('p2-time').innerHTML = min + ':' + sec;
}


function countdown() {
  var p1Time = document.getElementById('p1-time');
  p1Time.innerHTML = min + ':' + sec;
}


var timeId = setInterval(countdown, 1000);

function timeOutPlayer() {
  clearInterval(timeId);
}

setTimeout(timeOutPlayer, 3000);


function start() {
  playing = true;
};
  

function stop() {
  playing = false;
};
  

function reset() {
  return '';
};


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