var elem = document.getElementById("myBar");
var width = 0.1;
var id = setInterval(frame, 7);
function frame() {
  if (width >= 100) {
    width = 0.1;
  } else {
    width += 0.1;
    elem.style.width = width + "%";
  }
}
frame()