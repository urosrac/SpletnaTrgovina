var slideIndex = 0;
var width;
var elem = document.getElementById("myBar");
var id;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

  width = 1;
  /*id = setInterval(frame, 50);

  timeout = setTimeout(showSlides, 5000);*/
}
function frame() {
  if (width >= 100) {
    clearInterval(id);
    i = 0;
  } else {
    width++;
    elem.style.width = width + "%";
  }
}
function plusSlides(n) {
  clearInterval(id);
  clearTimeout(timeout);
  showSlides(slideIndex += n);
}