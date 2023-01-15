function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeColorBtnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

changeColorBtnEl.addEventListener('click', () => {
  const randomHexColorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColorEl;
  spanEl.textContent = randomHexColorEl;
});