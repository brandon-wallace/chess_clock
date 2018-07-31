var seconds = 60;


function countdown() {
  var p1Time = document.getElementById('p1-time');
  p1Time.innerHTML = min + ':' + sec;
}

var timeId = setInterval(countdown, 1000);

function timeOutPlayer() {
  clearInterval(timeId);
}