'use strict';

export const first = 'Ahmad';
export const last = 'boos';
export const middle = 'slam dunk';

export async function returnHi(name) {
  return `hi ${name} ${last}`;
}

// export { last, middle };
export * as ohYeah from './scripts.js';
