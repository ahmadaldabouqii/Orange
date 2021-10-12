'use strict';

// x.forEach((item, index) => console.log(`Item Number ${index}:  ${item}`));
// const newArr = x.filter((element, i) => i > 2);

const fruits = ['apple 🍎', 'banana 🍌', 'orange 🍊', 'lemon 🍋', 'tomato 🍅'];

////////////////////////////      SLICE      ////////////////////////////

/*
console.log(fruits.slice(2));
console.log(fruits.slice(2, 3));
console.log(fruits.slice(2, 4));
console.log(fruits.slice(-2));
console.log(fruits.slice(1, -1));
console.log(fruits.slice()); // Shallow Copy of fruits
console.log([...fruits]); // Shallow Copy of fruits
*/

////////////////////////////      SPLICE      ////////////////////////////

// console.log(fruits.splice(2));
// console.log(fruits.splice(-1));

////////////////////////////      REVERSE      ////////////////////////////

// fruits.reverse();
// console.log(fruits);

////////////////////////////      CONCAT      ////////////////////////////

const vegetables = ['carrots 🥕', 'Garlic 🧄', 'Melons 🍈', 'watermelon 🍉'];
// const all = fruits.concat(vegetables);
// console.log(all);

////////////////////////////      JOIN      ////////////////////////////

// console.log(fruits.join('  '));

////////////////////////////      FOREACH      ////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
for (const [i, mov] of movements.entries()) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
}

console.log('<----------FOREACH---------->');
movements.forEach((mov, i, arr) =>
  mov > 0
    ? console.log(`Movement ${i + 1}: You deposited ${mov}`)
    : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
);
*/

const names = ['ahmad', 'sara', 'rahaf', 'aya', 'ghassan'];

names.forEach((name, i, arr) => (arr[i] = `Hello ${name}`));
console.log(names);
