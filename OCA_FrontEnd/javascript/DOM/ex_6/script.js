'use strict';

const box = document.querySelectorAll('.box');

document.querySelectorAll('.show').forEach((item, index) => {
  item.addEventListener('click', e => {
    e.preventDefault();
    box[index].classList.toggle('visible');
  });
});

document.querySelectorAll('.hide').forEach((item, index) => {
  item.addEventListener('click', () => {
    box[index].classList.remove('visible');
  });
});
