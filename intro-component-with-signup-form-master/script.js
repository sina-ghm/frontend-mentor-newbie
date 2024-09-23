const form = document.querySelector('.form');

// check if email is valid
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showError(field, message) {
  const formControl = form[field].parentElement;
  formControl.classList.add('error');

  const small = formControl.querySelector('small');
  small.innerText = message;
}

function hideError(field) {
  const formControl = form[field].parentElement;
  formControl.classList.remove('error');
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = form['firstname'].value;
  const lastName = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (firstName === '') {
    showError('firstname', 'First Name is required');
  } else {
    hideError('firstname');
  }

  if (lastName === '') {
    showError('lastname', 'Last Name is required');
  } else {
    hideError('lastname');
  }

  if (email === '') {
    showError('email', 'Email is required');
  } else if (!validateEmail(email)) {
    showError('email', 'Email is not valid');
  } else {
    hideError('email');
  }

  if (password === '') {
    showError('password', 'Password is required');
  } else {
    hideError('password');
  }
});
