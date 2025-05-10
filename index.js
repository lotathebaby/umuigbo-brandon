// home page slides

const slide = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentActive = 1;

//left arrow
leftArrow.addEventListener('click', () => {
  prev();
  progress();
});
//right arrow
rightArrow.addEventListener('click', () => {
  next();
  progress();
});

//previous slide
const prev = () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
};

//next slide
const next = () => {
  currentActive++;
  if (currentActive > slide.length) {
    currentActive = slide.length;
  }
};

//progress
const progress = () => {
  slide.forEach((slides, index) => {
    if (index === currentActive - 1) {
      slides.classList.add('current');
    } else {
      slides.classList.remove('current');
    }
  });
};

//swipe detection
let startX = 0;
let endX = 0;

const slidesContainer = document.querySelector('.slides');

slidesContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slidesContainer.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50; // Minimum swipe distance in px

  if (endX < startX - threshold) {
    // Swiped left
    next();
    progress();
  } else if (endX > startX + threshold) {
    // Swiped right
    prev();
    progress();
  }
}

//events tab
const tabs = document.querySelectorAll('.tab-button');
const eventLists = document.querySelectorAll('.event-list');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    eventLists.forEach((list) => list.classList.add('hidden'));

    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.remove('hidden');
  });
});
