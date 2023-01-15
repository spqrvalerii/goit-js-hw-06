let counterValue = 0;

const displayCounterEl = document.getElementById('value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

decrementBtnEl.addEventListener('click', () => {
  counterValue--
  displayCounterEl.textContent = counterValue;
});

incrementBtnEl.addEventListener('click', () => {
  counterValue++
  displayCounterEl.textContent = counterValue;
});