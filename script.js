const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successBox = document.getElementById('formSuccess');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkField(input, condition) {
  if (condition) {
    input.classList.remove('is-invalid');
    return true;
  } else {
    input.classList.add('is-invalid');
    return false;
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameOk = checkField(nameInput, nameInput.value.trim() !== '');
  const emailOk = checkField(emailInput, isValidEmail(emailInput.value.trim()));
  const messageOk = checkField(messageInput, messageInput.value.trim() !== '');

  if (nameOk && emailOk && messageOk) {
    successBox.classList.remove('d-none');
    form.reset();
  } else {
    successBox.classList.add('d-none');
  }
});