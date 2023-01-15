const categoriesListEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesListEl.length}`)

categoriesListEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`)
});