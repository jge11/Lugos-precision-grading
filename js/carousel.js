const slider = document.querySelector("carouselContainer");
const slides = slider.querySelectorAll(".carouselItem");

// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

// To change the images dynamically every
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
}, 2000);
