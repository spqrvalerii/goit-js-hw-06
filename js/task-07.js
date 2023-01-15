const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inputEl.addEventListener('change', (event) => {
  spanEl.style.fontSize = `${event.target.value}px`;
  console.log(inputEl.value);
});