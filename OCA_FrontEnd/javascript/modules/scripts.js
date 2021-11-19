'use strict';

// import first, { returnHi as hehe, last, middle } from './utils.js';
// import ahmad from './ahmad.js';
// import * as ohYeah from './utils.js';
import { handleButtonClick } from './handlers.js';

// import samer from './utils.js';

// let promise = import('./currencies.js');
// promise.then(data => console.log(data.currencies));

// const name = 'ahmad';
// console.log(ohYeah);
// ohYeah.returnHi(name).then(data => console.log(data));

const btn = document
  .querySelector('button')
  .addEventListener('click', handleButtonClick);

// console.log(last);
// console.log(middle);

// console.log(samer);

// console.log(first);

// console.log('all module ', everything);
