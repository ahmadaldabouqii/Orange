'use strict';
// import currencies from './currencies.js';

export async function handleButtonClick(event) {
  const { default: currency, localCurrency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}
