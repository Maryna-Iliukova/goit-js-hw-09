const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);
const formData = savedData ? JSON.parse(savedData) : { email: '', message: '' };

email.value = formData.email ?? '';
message.value = formData.message ?? '';

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const currentEmail = email.value.trim();
  const currentMessage = message.value.trim();

  if (currentEmail === '' || currentMessage === '') {
    alert('Fill please all fields');
    return;
  }

  console.log({
    email: currentEmail,
    message: currentMessage,
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
