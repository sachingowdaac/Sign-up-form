const form = document.getElementById('form');
// const first = document.getElementById('firstname');
// const last = document.getElementById('lastname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = form['firstname'].value;
  const lastName = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (firstName === '') {
    addErrorTo('firstname', 'First Name is required');
  }
  if (lastName === '') {
    addErrorTo('lastname', 'Last Name is required');
  }
  if (email === '') {
    addErrorTo('email', 'Email is required');
  }
  if (!isValid(email)) {
    addErrorTo('email', 'Email is not valid');
  }
  if (password === '') {
    addErrorTo('password', 'password is required');
  }
});

function addErrorTo(field, message) {
  const small = form[field].parentNode.querySelector('small');
  small.innerText = message;
  small.style.opacity = '1';
  const formControl = form[field].parentNode;
  formControl.classList.add('error');
}
function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
