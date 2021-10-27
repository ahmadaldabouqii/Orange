'use strict';

console.log('Here is : ', 'array');

////////////////////////////////////////////////////////////////

// 1 Correct the syntax error
[1, 7, 9, 45, 'Str', 'alex', 'moh', 'the', 'fox', 'over', 'lazy', 'dog'];

////////////////////////////////////////////////////////////////

// 2 What the index of "Banana","Tomato"
var fruits = ['Tomato', 'Banana', 'Watermelon'];
// Tomato = 0 // Banana = 1

////////////////////////////////////////////////////////////////
/*
3 Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

const mybest = ['mansaf', 'footbal', 'Prison break'];

////////////////////////////////////////////////////////////////

/*
4 Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr) {
  return arr[0];
}

////////////////////////////////////////////////////////////////

/*
5 Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr) {
  return arr[arr.length - 1];
}

////////////////////////////////////////////////////////////////

/*
6 Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
const arr = [0, 5, 7, 9];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 1;
}
console.log(arr);
////////////////////////////////////////////////////////////////

/*
7 Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
*/

const array2 = [5, 9, -7, 3.5];
// console.log(array2.push());
// console.log(array2.);
// console.log(array2.);
// console.log(array2.);

////////////////////////////////////////////////////////////////

/*
8 Create a function called middleOfArray that take an array as a parameter,
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets.

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) => "u and g"
*/
const middleOfArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0) {
      return `${arr[arr.length / 2 - 1]} & ${arr[Math.floor(arr.length / 2)]}`;
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  }
};

console.log(middleOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
*/

const animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals[1] = 'elephant';

/*
10 Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr, index) {
  return arr[index];
}

console.log(indexOfArray([1, 2, 3], 0));

/*
11 Create a function called arrayExceptLast
that accept an array and return the entire array
except the last elemnt.
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr) {
  arr.pop(arr[arr.length - 1]);
  return arr;
}

console.log(arrayExceptLast([1, 2, 3, 4]));
/*
12 Create a function called addToEnd that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr, value) {
  arr.push(value);
  return arr;
}
console.log(addToEnd([1, 2, 3, 4], 5));
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function sumArray(arr){
//   let sum = 0;
//   for (let i = 0; i < arr.length;i++){
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([1,2,3]));
/*
14 Create a function called minInArray
that accept an array and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr) {
  let min = arr[0];
  for (let item of arr) {
    return (min = item < min ? item : min);
  }
}
console.log(minInArray([1, 2, 3]));
/*
15 Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it.

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, element) {
  arr.splice(arr.indexOf(element), 1);
  return arr;
}
console.log(removeFromArray([1, 2, 3], 2));
/*
16 Create a function called oddArray
that accept an array and return an array have only the odd elemnts.

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
  let odd = [];
  for (let item of arr) {
    if (item % 2 !== 0) odd.push(item);
  }
  return odd;
}
console.log(oddArray([1, 2, 3]));
/*
17 Create a function called aveArray
that accept an array
and return the average of the numbers inside this array.

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
  let avg = 0;
  for (let item of arr) {
    avg += item;
  }
  return avg / arr.length;
}
console.log(aveArray([1, 2, 3]));
/*
18 Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr) {
  let short = arr[0];
  for (let str of arr) {
    return (short = str.length < short.length ? (short = str) : (str = short));
  }
}
console.log(shorterInArray(['ahmad', 'mohammad', 'saddam']));
/*
19 Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) counter++;
  }
  return counter;
}
console.log(repeatChar('alex mercer madrasa rashed2 emad hala zz', 'z'));

/*
20 Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0 && i % 2 === 0) return [arr[i].slice()];
  }
}
console.log(
  evenIndexOddLength(['alex', 'mercer', 'madrasa', 'rashed2', 'emad', 'hala'])
);

/*
21 Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}
console.log(powerElementIndex([1, 2, 3, 4]));
/*
22 Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(arr) {
  let s = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 === 0) s.push(arr[i]);
  }
  return s;
}
console.log(evenNumberEvenIndex([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]));
