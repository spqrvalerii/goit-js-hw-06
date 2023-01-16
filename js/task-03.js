const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryElem = document.querySelector('.gallery');
galleryElem.style.listStyle = 'none';
galleryElem.style.display = 'flex';
galleryElem.style.flexDirection = 'column';
galleryElem.style.gap = '10px';
console.log(galleryElem);

const imagesElem = images.map(image => {
  return `<li class="gallery__item"><img class="gallery__img" src="${image.url}" width='800' alt="${image.alt}"/>`
}).join("");
console.log(imagesElem);
  
galleryElem.insertAdjacentHTML("beforeend", imagesElem);