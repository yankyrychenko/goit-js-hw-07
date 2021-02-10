const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validation);

function validation(e) {
  e.target.value.length === Number(inputRef.dataset.length)
    ? (inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
    : (inputRef.classList.add('invalid'), inputRef.classList.remove('valid'));
}
