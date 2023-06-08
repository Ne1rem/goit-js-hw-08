import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const submitForm = document.querySelector('.submit-form');
const storageKey = "feedback-form-state";
const message = document.querySelector('textarea');

submitForm.addEventListener("submit", handleSubmit);

populateTextarea();

formInput.addEventListener('input', throttle(saveInputValue, 500));

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  message.value = '';
}

function saveInputValue() {
  const feedback = {
    email: emailInput.value,
    message: message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(feedback));
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(storageKey));
  
  if (savedMessage === null) {
    return;
  }
  
  message.value = savedMessage['message'] || '';
  emailInput.value = savedMessage['email'] || '';
}
