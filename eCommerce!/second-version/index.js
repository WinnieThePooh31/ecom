var slideshow = document.getElementById("slideshow");
var images = slideshow.getElementsByTagName("img");
var currentIndex = 0;

function nextImage() {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
}

setInterval(nextImage, 5000);

