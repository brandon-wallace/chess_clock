let seconds = 60;
let increaseP1Time = document.getElementById('p1-min');
let decreaseP1Time = document.getElementById('p1-min');
let increaseP2Time = document.getElementById('p2-min');
let decreaseP2Time = document.getElementById('p2-min');
let rstbtn = document.getElementById('rst-btn');
let srtbtn = document.getElementById('strt-btn');


// Player buttons
function increaseP1() {
  let min = document.getElementById('p1-min').innerHTML;
  min = parseInt(min, 10) + 1;
  if (min < 10) {
    min = '0' + min;
  }
  increaseP1Time.innerHTML = min;
}


function decreaseP1() {
  let min = document.getElementById('p1-min').innerHTML;
  min = parseInt(min, 10) - 1;
  if (min < 10) {
    min = '0' + min;
  }
  decreaseP1Time.innerHTML = min;
}


function increaseP2() {
  let min = document.getElementById('p2-min').innerHTML;
  min = parseInt(min, 10) + 1;
  if (min < 10) {
    min = '0' + min;
  }
  increaseP2Time.innerHTML = min;
}


function decreaseP2() {
  let min = document.getElementById('p2-min').innerHTML;
  min = parseInt(min, 10) - 1;
  if (min < 10) {
    min = '0' + min;
  }
  decreaseP2Time.innerHTML = min;
}
// END Player buttons


function reset() {
  let p1Time = document.getElementById('p1-min');
  p1Time.innerHTML = 10;
  let p1Sec =  document.getElementById('p1-sec');
  p1Sec.innerHTML = '00';
  let p2Time = document.getElementById('p2-min');
  p2Time.innerHTML = 10;
  let p2Sec =  document.getElementById('p2-sec');
  p2Sec.innerHTML = '00';
}

function start() {
    let minutes = Math.round((seconds - 30) / 60);
    let remainingSeconds = seconds % 60;

    document.getElementById('p1-sec').innerHTML = remainingSeconds;
    document.getElementById('p1-min').innerHTML = minutes;

    if (seconds == 0) {
        clearInterval(start);
        document.getElementById('p1-min').innerHTML = '00';
        document.getElementById('p1-sec').innerHTML = '00';
    } else {
        seconds--;
    }
    
    let timerId = setInterval('start()', 1000);
    /*
    let min = document.getElementById('p1-min').innerHTML;
    let sec = document.getElementById('p1-sec').innerHTML;
    sec = seconds;
    console.log(min);
    console.log(sec);
    document.getElementById('p1-sec').innerHTML = sec;

    function countdown() {
      sec -= 1;
      document.getElementById('p1-sec').innerHTML = sec;
      if (sec == 0) {
        min = min - 1;
        document.getElementById('p1-min').innerHTML = min;
      }
    }
      timeOutPlayer();
    */
}
// var timeId = setInterval(countdown, 1000);
// start();



function timeOutPlayer() {
    clearInterval(timeId);
}

/*
function stop() {
  playing = false;
}

*/
  /*
function switchPlayer() {
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
