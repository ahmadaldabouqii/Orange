'use strict';

const font_family_list = document.querySelector('.font-family');
const font_size_list = document.querySelector('.font-size');
const italic_checkBox = document.querySelector('#italic');
const bold_checkBox = document.querySelector('#bold');
const underline_checkBox = document.querySelector('#underline');
const box = document.querySelector('.box');

font_family_list.addEventListener('change', event => {
  box.style.fontFamily = event.target.value;
});

font_size_list.addEventListener('change', event => {
  box.style.fontSize = event.target.value;
});

italic_checkBox.addEventListener('change', event => {
  italic_checkBox.checked
    ? (box.style.fontStyle = event.target.value)
    : (box.style.fontStyle = 'normal');
});

bold_checkBox.addEventListener('change', event => {
  bold_checkBox.checked
    ? (box.style.fontWeight = event.target.value)
    : (box.style.fontWeight = 'normal');
});

underline_checkBox.addEventListener('change', event => {
  underline_checkBox.checked
    ? (box.style.textDecoration = event.target.value)
    : (box.style.textDecoration = 'normal');
});
