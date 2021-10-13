'use strict';

//////////////////      #ex_2_A      //////////////////

const box = document.querySelector('.box');

const colors = ['green', 'red', 'blue'];
box.style.backgroundColor = colors[2];

let arrLength = colors.length - 2;
box.addEventListener('click', () => {
  if (arrLength < 0) arrLength = 2;
  box.style.backgroundColor = colors[arrLength--];
});

function randomColor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomColor(0, 3));
