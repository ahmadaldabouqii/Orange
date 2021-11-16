'use strict';

const container = document.querySelector('.colorBox_Container');
const data = document.querySelector('.data');

container.addEventListener('click', event => {
  if (event.target.classList.contains('box'))
    data.textContent = window.getComputedStyle(event.target).backgroundColor;
});
