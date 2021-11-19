'use strict';

// const endpoint = 'https://api.github.com/users/wesbos';

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const userEl = document.querySelector('.user');

async function displayUser(userName) {
  userEl.textContent = 'loading....';

  const response = await fetch(`${usersEndpoint}/${userName}`);
  const data = await response.json();

  console.log(response);
  console.log(data);
  console.log(data.blog);
  console.log(data.name);
  console.log(data.location);
  userEl.textContent = `${data.name} - ${data.blog}`;
}

function handleError(err) {
  console.log('OH NOO!!');
  console.log(err);
  userEl.textContent = `Something went wrong: ${err}`;
}

displayUser('stolinski').catch(handleError);

// Remember: When using fetch, you need to use a double promise
// to actually get the data. The first promise gets the response
// and the second one takes the response and converts it into JSON.
