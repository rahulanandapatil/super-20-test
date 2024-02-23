let currentIndex = 0;
let isAutoPlay = true;
let autoPlayInterval;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function toggleAutoPlay() {
  isAutoPlay = !isAutoPlay;
  if (isAutoPlay) {
    autoPlayInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    document.querySelector('.play-pause').textContent = 'Pause';
  } else {
    clearInterval(autoPlayInterval);
    document.querySelector('.play-pause').textContent = 'Play';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  showSlide(currentIndex);
  toggleAutoPlay();
});
