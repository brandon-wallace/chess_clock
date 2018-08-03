let seconds = 60;
let increaseP1Time = document.getElementById('p1-min');
let decreaseP1Time = document.getElementById('p1-min');
let increaseP2Time = document.getElementById('p2-min');
let decreaseP2Time = document.getElementById('p2-min');
// let rstbtn = document.getElementById('rst-btn');
// let srtbtn = document.getElementById('strt-btn');


// Set player1's time.
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


// Set player2's time.
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


// Reset Player's clocks.
function reset() {
  let p1Time = document.getElementById('p1-min');
  p1Time.innerHTML = 10;
  let p1Sec =  document.getElementById('p1-sec');
  p1Sec.innerHTML = '00';
  let p2Time = document.getElementById('p2-min');
  p2Time.innerHTML = 10;
  let p2Sec =  document.getElementById('p2-sec');
  p2Sec.innerHTML = '00';
  console.log("time reset");
}


// Start the clock.
function start() {
let countdown = setInterval(
    function() {
    let p1Minutes = document.getElementById('p1-min').innerHTML;
    console.log(p1Minutes);
    console.log(document.getElementById('p1-sec').innerHTML);
    console.log(seconds); 
    seconds--;
    console.log(seconds); 

    if (p1Minutes < 10) {
        p1Minutes = '0' + p1Minutes;
    }
    document.getElementById('p1-sec').innerHTML = seconds;
    document.getElementById('p1-min').innerHTML = p1Minutes;

    function countdown(sec) {
        seconds--;
        console.log({seconds});
        console.log({p1Minutes});
    }
    if (p1Minutes == 0) {
        clearInterval(start());
    }

  }, 1000);
}

    /*
    if (seconds == 0) {
        clearInterval(start);
        document.getElementById('p1-min').innerHTML = '00';
        document.getElementById('p1-sec').innerHTML = '00';
    } else {
        seconds--;
    }
    */
    
    // let timerId = setInterval('start()', 1000);
    // setTimeout('start()', 5000);
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
