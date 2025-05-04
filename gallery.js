
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

let slideIndexG = 1;
showSlidesG(slideIndexG);


function plusSlidesG(n) {
  showSlidesG(slideIndexG += n);
}


function currentSlideG(n) {
  showSlidesG(slideIndexG = n);
}

function showSlidesG(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexG = 1}
  if (n < 1) {slideIndexG = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexG-1].style.display = "block";
  dots[slideIndexG-1].className += " active";
  captionText.innerHTML = dots[slideIndexG-1].alt;
}