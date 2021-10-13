'use strict';
const lista = document.querySelector('.flags');
const image = document.querySelector('.flag-img');
lista.addEventListener('change', e => {
  image.src = e.target.value;
});
