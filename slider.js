var slideIndex = 0;
var slides = document.querySelectorAll('.slide');
var prevButton = document.querySelector('.prev-slide');
var nextButton = document.querySelector('.next-slide');

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[n].classList.add('active');
  slideIndex = n;
}

function autoSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

prevButton.addEventListener('click', function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

nextButton.addEventListener('click', function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

// var autoSlideInterval = setInterval(autoSlide, 5000);

// document.addEventListener('visibilitychange', function() {
//   if (document.hidden) {
//     clearInterval(autoSlideInterval);
//   } else {
//     autoSlideInterval = setInterval(autoSlide, 5000);
//   }
// });
