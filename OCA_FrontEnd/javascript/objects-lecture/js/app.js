'use strict';

// let mercedes = {
//     color: 'black',
//     year: 2020,
//     type: 'mercedes',
//     model: 'E200',
//     drive: function () {
//         console.log('im driving mercedes now');
//     },

//     topSellingCountries: ['Germany', 'UK', 'Jordan'],
//     spareParts: {
//         wheel: 2,
//         leatherCover: true,
//         logo: 2,
//     }
// };


// console.log(mercedes);
// console.log(mercedes.drive());
// console.log(mercedes.model);
// console.log(mercedes.type);
// console.log(mercedes.topSellingCountries[2]);

// for (let i = 0; i < car.topSellingCountries.length; i++) {
//     console.log(car.topSellingCountries[i]);
// }

// console.log(mercedes.spareParts.leatherCover);
// console.log(mercedes.spareParts.logo);
// console.log(mercedes.spareParts.wheel);

// access properties using dot notation (best practice)
// console.log(bmw.type);

// access properties using bracket notation (not good practice)
// console.log(mercedes['type']);
// console.log(mercedes.drive());

// DOM (Document Object Model)
// document.write('<h2>Hello im added from the document object</h2>');
// console.log(document);

// Math
// console.log(Math.sqrt(16));
// console.log(Math.abs(-16));
// console.log(Math.random());

// let bmw = {
//     color: 'white',
//     year: 2015,
//     type: 'bmw',
//     model: '520',
//     milage: 0,
//     image: 'https://www.autodeal.com.ph/custom/blog-post/header/2019-bmw-5-series-520i-review-road-test-philippines-5df1e3d029352.jpg',
//     drive: function () {
//         console.log('im driving BMW now');
//     },
//     getData: function () {
//         let bmwtype = this.type;
//         let bmwmodel = this.model;
//         return bmwtype + ': ' + bmwmodel;
//     },
//     topSellingCountries: ['Germany', 'KSA', 'UAE'],
//     spareParts: {
//         wheel: 1,
//         leatherCover: false,
//         logo: 3,
//     },
//     setMilage: function () {
//         let Carmilage = this.milage;
//         Carmilage = randomGenerator(20, 30);
//         return Carmilage;
//     }
// };

// let main = document.getElementById('demo');

// let unorderedList = document.createElement('ul');

// let type = document.createElement('li');
// let year = document.createElement('li');
// let color = document.createElement('li');

// type.innerText = bmw.getData();
// year.innerText = bmw.year;
// color.innerText = bmw.color;


// unorderedList.appendChild(type);
// unorderedList.appendChild(year);
// unorderedList.appendChild(color);

// main.appendChild(unorderedList);

// // console.log(unorderedList);

// let CarImage = document.createElement('img');
// CarImage.setAttribute('src', bmw.image);

// type.setAttribute('class', 'list-item');

// main.appendChild(CarImage);

// console.log(bmw.milage);
// function randomGenerator(min, max) {
//     // Random function gives us random number between 0-1
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(bmw.setMilage());
//===========================================================================

let color, year, type, model, milage;
function Car(color, year, type, model, milage) {
    this.color = color;
    this.year = year;
    this.type = type;
    this.model = model;
    this.milage = milage;

}

Car.prototype.driveCar = function () {
    console.log(this.type + ' ' + this.model + ' is driving');
};

let bmw = new Car('red', 2021, 'BMW', '520', 6300);
let mercedes = new Car('blue', 2021, 'mercedes', 'E200', 8000);

// console.log(bmw.driveCar());
// console.log(mercedes.driveCar());
// console.log(mercedes);





// let bmw = {
//     color: 'white',
//     year: 2015,
//     type: 'bmw',
//     model: '520',
//     milage: 0,
//     image: 'https://www.autodeal.com.ph/custom/blog-post/header/2019-bmw-5-series-520i-review-road-test-philippines-5df1e3d029352.jpg',
//     drive: function () {
//         console.log('im driving BMW now');
//     },
//     getData: function () {
//         let bmwtype = this.type;
//         let bmwmodel = this.model;
//         return bmwtype + ': ' + bmwmodel;
//     },
//     topSellingCountries: ['Germany', 'KSA', 'UAE'],
//     spareParts: {
//         wheel: 1,
//         leatherCover: false,
//         logo: 3,
//     }
// };


//=================== freeCodeCamp

var arr = [1, 2, 3, 4];
var arr2 = Array(1, 2, 3, 4);
// console.log(Array.prototype);


var Foo = function (name) {
    this.MyName = name;
    this.tellMyName = function () {
        console.log('this is inside constructor: >> ' + this.MyName);
    }
}
var fooObj1 = new Foo('James');
fooObj1.tellMyName();


var Fo = function (name) {
    this.myName = name;
}

Fo.prototype.tellMyName = function () {
    return this.myName;
}
var fooObj2 = new Fo('James');
console.log('this happen with prototype: >> ' + fooObj2.tellMyName());


function Person(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

let p1 = new Person('ahmad', 23, 'green');

Person.prototype.nationality = function (nationality) {
    this.nationality = nationality;
    return nationality;
};

console.log(p1.nationality('english'));
