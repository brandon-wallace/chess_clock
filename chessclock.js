"use strict";

let p1sec = 60;
let p2sec = 60;
let playing = false;
let currentPlayer = 0; // player1: 0, player2: 1
let increaseP1Time = document.getElementById('p1-min');
let decreaseP1Time = document.getElementById('p1-min');
let increaseP2Time = document.getElementById('p2-min');
let decreaseP2Time = document.getElementById('p2-min');
let startbtn = document.getElementById('start-btn');
let resetbtn = document.getElementById('reset-btn');
let pausebtn = document.getElementById('pause-btn');
let swapbtn = document.getElementById('swap-btn');
let beep = new Audio('../audio/start.mp3');


function padZero(number) {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
}


// Increase player1's time.
function increaseP1() {
    if (playing) return;
    let min = document.getElementById('p1-min').innerHTML;
    min = parseInt(min, 10) + 1;
    if (min >= 99) {
        min = 99;
    }
    increaseP1Time.innerHTML = padZero(min);
}


// Decrease player1's time.
function decreaseP1() {
    if (playing) return;
    let min = document.getElementById('p1-min').innerHTML;
    min = parseInt(min, 10) - 1;
    if (min <= 1) {
        min = 1;
    }
    decreaseP1Time.innerHTML = padZero(min);
}


// Increase player2's time.
function increaseP2() {
    if (playing) return;
    let min = document.getElementById('p2-min').innerHTML;
    min = parseInt(min, 10) + 1;
    if (min >= 99) {
        min = 99;
    }
    increaseP2Time.innerHTML = padZero(min);
}


// Decrease player2's time.
function decreaseP2() {
    if (playing) return;
    let min = document.getElementById('p2-min').innerHTML;
    min = parseInt(min, 10) - 1;
    if (min <= 1) {
        min = 1;
    }
    decreaseP2Time.innerHTML = padZero(min);
}


// Reset clocks to default settings.
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
    startbtn.disabled = false;
    currentPlayer = 0;
}


// Toggle from player to player.
function swap() {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
}


// Pause the clocks.
function pause() {
    playing = !playing;
    if (playing) {
        pausebtn.value = 'PAUSE';
    } else {
        pausebtn.value = 'RESUME';
    }
}


class Clock {
    constructor(display, min) {
        this.display = display;
        this.min = min;
        this.sec = 60;
    }

    get minutes() {
        return this.min;
    }

    getMinutes(timeId) {
        return document.getElementById(timeId).innerHTML;
    }
}


// Create an instance of the clock class.
let p1time = new Clock('p1-min', document.getElementById('p1-min').innerHTML);
let p2time = new Clock('p2-min', document.getElementById('p2-min').innerHTML);


// Start countdown.
function start() {
    playing = true;
    beep.play();
    let timeout = new Audio('../audio/timeout.mp3');
    let timer = setInterval(function() {
        if (currentPlayer === 0) {

            if (playing) {
                resetbtn.disabled = true;
                startbtn.disabled = true;
                p1time.min = parseInt(p1time.getMinutes('p1-min'), 10);
                if (p1sec == 60) {
                    p1time.min = p1time.min - 1;
                }
                p1sec = p1sec - 1;
                document.getElementById('p1-sec').innerHTML = padZero(p1sec);
                document.getElementById('p1-min').innerHTML = padZero(p1time.min);

                if (p1sec === 0) {
                    if (p1sec === 0 && p1time.min === 0) {
                        resetbtn.disabled = false;
                        document.getElementById('timeout1').style.color = "#FF0000";
                        timeout.play();
                        clearInterval(timer);
                        playing = false;
                    }
                    p1sec = 60;
                }
            }
            
        } else {

            document.getElementById('pause-btn').addEventListener("click", pause);

            if (playing) {
                resetbtn.disabled = true;
                startbtn.disabled = true;
                p2time.min = parseInt(p2time.getMinutes('p2-min'), 10);

                if (p2sec == 60) {
                    p2time.min = p2time.min - 1;
                }
                p2sec = p2sec - 1;
                document.getElementById('p2-sec').innerHTML = padZero(p2sec);
                document.getElementById('p2-min').innerHTML = padZero(p2time.min);

                if (p2sec === 0) {
                    if (p2sec == 0 && p2time.min == 0) {
                        resetbtn.disabled = false;
                        document.getElementById('timeout2').style.color = "#FF0000";
                        timeout.play();
                        clearInterval(timer);
                        playing = false;
                    }
                    p2sec = 60;
                }
            }
        }

        document.getElementById('pause-btn').addEventListener("click", pause);

    }, 1000); 
}

// Change turns pressing the spacebar.
document.addEventListener("keypress", e => {
    if(e.keyCode === 32 || e.which === 32) {
        swap()
    }
    if(!playing) {
        pause()
    }
});
