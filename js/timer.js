

// const setTime = () => {
//   let starttime = prompt("Time:");
//   console.log(starttime);
// }


const padZero = (n) => {
  if (n < 10) {
    return '0' + n;
  }
  return n;
}

const openModal = () => {
  document.querySelector(".modal").style.display = "flex";
}

const closeModal = () => {
  document.querySelector(".modal").style.display = "none";
}

let min1 = Number(document.getElementById("minutes1").innerHTML);
let min2 = Number(document.getElementById("minutes2").innerHTML);

const increaseTime = () => {
  console.log(min1);
  if (min1 === 99) {
    min1 = 98;
  }
  min1 += 1;
  document.getElementById("minutes1").innerHTML = padZero(min1);
}

const decreaseTime = () => {
  if (min1 === 1) {
    min1 = 2;
  }
  min1 -= 1;
  document.getElementById("minutes1").innerHTML = padZero(min1);
}

// const increaseTime = () => {
//   console.log(min1);
//   if (min1 === 99) {
//     min1 = 98;
//   }
//   min1 += 1;
//   document.getElementById("minutes1").innerHTML = padZero(min1);
// }

// const decreaseTime = () => {
//   if (min1 === 1) {
//     min1 = 2;
//   }
//   min1 -= 1;
//   document.getElementById("minutes1").innerHTML = padZero(min1);
// }
