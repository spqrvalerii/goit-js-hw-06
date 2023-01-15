const textInputEl = document.getElementById('name-input');
const spanOutputEl = document.getElementById('name-output');

textInputEl.addEventListener('input', event => {
  spanOutputEl.textContent = event.target.value;

  if (event.target.value === '') {
    spanOutputEl.textContent = 'Anonymous';
  }
});