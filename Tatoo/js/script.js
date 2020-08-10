let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.testimonials-container');
const track = document.querySelector('.testimonials-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.testimonials-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
let nextGalleryToAdd = 19;
const galleryContainer = document.getElementById('gallery-container');
const gallery = [
   {
      id: 19,
      photo: '../img/gallery/img-19.jpg'
   }, {
      id: 20,
      photo: '../img/gallery/img-20.jpg'
   }, {
      id: 21,
      photo: '../img/gallery/img-21.jpg'
   }, {
      id: 22,
      photo: '../img/gallery/img-22.jpg'
   }, {
      id: 23,
      photo: '../img/gallery/img-23.jpg'
   }
];

// gallery
function addMoreGallery() {
   const filteredGallery = gallery.filter(c => c.id === nextGalleryToAdd || c.id === nextGalleryToAdd + 1 || c.id === nextGalleryToAdd + 2 || c.id === nextGalleryToAdd + 3 || c.id === nextGalleryToAdd + 4);
   if (filteredGallery.length === 0) return;

   renderGallery(filteredGallery);
}

function renderGallery(galleryArray) {
   for (let i = 0; i < galleryArray.length; i++) {
      let cardMarkup = `
      <div class="grid-item">
         <img class="grid-img" src="${galleryArray[i].photo}" alt="photo">
         <a href="#">
            <img class="grid-zoom" src="./img/gallery/zoom.png" alt="zoom">
         </a>
      </div>
      `;

   galleryContainer.innerHTML += cardMarkup;
   nextGalleryToAdd++;
   }
}


// carousel
items.forEach((item) => {
   item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
   const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

   position -= itemLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   setPosition();
   checkBtns();
});

btnPrev.addEventListener('click', () => {
   const itemLeft = Math.abs(position) / itemWidth;

   position += itemLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   setPosition();
   checkBtns();
});

const setPosition = () => {
   track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
   btnPrev.disabled = position === 0;
   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
