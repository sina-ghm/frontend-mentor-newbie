const form = document.querySelector("form");
const email = document.getElementById("email");

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", e => {
  e.preventDefault();
  const emailValue = email.value
  if(!validateEmail(emailValue)) {
    form.classList.add('error')
  } else {
    form.classList.remove('error')
  } 

});
