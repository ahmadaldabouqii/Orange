'use strict';

const tbody = document.querySelector('#cupcake-table');
const cutomer_name = document.querySelector('#customer_name');
const count = document.querySelector('#count');
const type = document.querySelector('#type');
const delivery_time = document.querySelector('#delivery_time');
const allergies = document.querySelector('#allergies');
let all_customers = [];

const cup_cakes = [
  { name: 'Chocolate', calories: 'high', weight: '200gm' },
  { name: 'Carrot', calories: 'medium', weight: '150gm' },
  { name: 'Banana', calories: 'high', weight: '200gm' },
  { name: 'Strawberry', calories: 'low', weight: '160gm' },
  { name: 'Pecan', calories: 'medium', weight: '200gm' },
];

cup_cakes.forEach(cake => {
  let tdName = document.createElement('td');
  let tdType = document.createElement('td');
  let tdWeight = document.createElement('td');
  let tr = document.createElement('tr');

  tdName.append(cake.name);
  tdType.append(cake.calories);
  tdWeight.append(cake.weight);

  tr.append(tdName, tdType, tdWeight);

  tbody.appendChild(tr);

  document.querySelector('.table').appendChild(tbody);

  if (cake.calories === 'high') tdType.style.backgroundColor = 'red';
  else if (cake.calories === 'medium') tdType.style.backgroundColor = 'orange';
  else tdType.style.backgroundColor = 'lightgreen';
});

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('#welcome').innerHTML = 'Welcome ';

  const customer = {
    name: cutomer_name.value,
    count: count.value,
    type: type.value,
    delivery_time: delivery_time.value,
    allergies: allergies.value,
  };

  if (customer && customer.name !== '' && customer.name.length >= 5 && customer.name.length <= 16 && customer.count !== '' && customer.type !== '' && customer.delivery_time !== '' && customer.delivery_time !== '4:00pm') {
    all_customers.push(customer);
  } else {
    return;
  }

  if (!localStorage.getItem('allCustomers')) {
    localStorage.setItem('allCustomers', JSON.stringify(all_customers));
  } else {
    let all_data = JSON.parse(localStorage.getItem('allCustomers'));
    all_data.push(customer);
    localStorage.setItem('allCustomers', JSON.stringify(all_data));
  }
});

document.querySelector('form').addEventListener('change', validate);

function validate() {
  if (delivery_time.value === '4:00pm' || delivery_time.value === '') {
    removeClass(delivery_time,'is-valid');
    addClass(delivery_time,'is-invalid');
    setDisplay(delivery_time,'valid-feedback','none');
    setDisplay(delivery_time,'invalid-feedback','block');
    delivery_time.closest('.form-group').querySelector('.invalid-feedback').innerHTML = `Unfortunately ${type.value} cannot be delivered at ${delivery_time.value === '' ? 'at this time' : delivery_time.value}`;
  } else {
    removeClass(delivery_time,'is-invalid');
    setDisplay(delivery_time,'invalid-feedback','none');
    setDisplay(delivery_time,'valid-feedback','block');
  }

  if ((type.value === 'chocolate' && allergies.value === 'dairy_free') || (type.value === 'pecan' && allergies.value === 'nut_free')) {
    removeClass(type,'is-valid');
    addClass(type,'is-invalid');
    setDisplay(type,'valid-feedback','none');
    setDisplay(type,'invalid-feedback','block');
    addClass(allergies,'is-invalid');
    type.closest('.form-group').querySelector('.invalid-feedback').innerHTML = `you can't take  ${type.value} if you have ${allergies.value}`;
  } else {
    removeClass(allergies,'is-invalid');
    removeClass(type,'is-invalid');
    setDisplay(type,'invalid-feedback','none');
  }
}

function setDisplay(forWhat, cls, type){
  forWhat.closest('.form-group').querySelector(`.${cls}`).style.display = `${type}`;
}

function removeClass(type, clas){
  type.closest('.form-group').querySelector('.form-select').classList.remove(`${clas}`);
}

function addClass(type, clas){
  type.closest('.form-group').querySelector('.form-select').classList.add(`${clas}`);
}

document.querySelector('.btn-info').addEventListener('click', () => {
  let retrieveUsers = localStorage.getItem('allCustomers');
  if (retrieveUsers) {
    retrieveUsers = JSON.parse(retrieveUsers);
    document.querySelector('#welcome').innerHTML = `Welcome ${retrieveUsers[retrieveUsers.length - 1].name}`;
  }
});

(function () {
  'use strict';
  window.addEventListener('load',function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit',function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },false);
    });},false);
})();
