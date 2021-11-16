'use strict';

const form = document.querySelector('#form');
const songTextField = document.querySelector('#songTextSearch');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (songTextField.value) {
    const div = document.createElement('div');
    div.classList.add('song');
    div.innerHTML = `${songTextField.value} <button class="remove">remove!</button>`;
    div.lastChild.addEventListener('click', () => div.remove());
    document.body.append(div);
    songTextField.value = '';
  } else {
    alert('Add song name before Submit!!');
  }
});
