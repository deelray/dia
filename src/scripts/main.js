'use strict';

const sliderImages = document.querySelectorAll('.slider__image');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let slideIndex = 1;

showImage(slideIndex);

function addImage(n) {
  showImage(slideIndex += n);
}

function showImage(n) {
  if (n > sliderImages.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = sliderImages.length;
  }

  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }

  sliderImages[slideIndex - 1].style.display = 'block';
}

nextBtn.addEventListener('click', (event) => {
  event.preventDefault();

  addImage(1);
});

prevBtn.addEventListener('click', (event) => {
  event.preventDefault();

  addImage(-1);
});
