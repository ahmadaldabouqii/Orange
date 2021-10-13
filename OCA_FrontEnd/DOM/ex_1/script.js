'use strict';

//////////////////      #ex_1      //////////////////

const box = document.querySelector('.box');

box.addEventListener(
  'mouseover',
  () => (box.innerHTML = `<h2>Can I Help You ? 💁🏻‍♂️</h2>`)
);

box.addEventListener(
  'mouseout',
  () => (box.innerHTML = `<h2>Hello World 🌎!</h2>`)
);
