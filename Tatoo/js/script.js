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
   btnPrev.disabled = position ===0;
   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};