var scoor = 0;

window.onload = function mainReload() {
  var element = document.getElementById("scoor");
  scoor = localStorage.getItem("scoor");
  // console.log("arrived: " + scoor);
  element.innerHTML = animateValue("scoor", 0, scoor, 500);
};

function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}
