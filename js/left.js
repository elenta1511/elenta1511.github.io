const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector(".slider__item");
var item = document.querySelector('.slider__one');
right.addEventListener("click", function (e) {
  e.preventDefault();
  let motionRight = parseInt(getComputedStyle(items).right);
  if (!motionRight) {
    motionRight = 0;
  }
  ;
  if (motionRight < item.offsetWidth) {
    items.style.right = motionRight + item.offsetWidth + 'px';
  }
  else {
    items.style.right = 0;
  }
  ;
});
left.addEventListener("click", function (e) {
  e.preventDefault();
  let motionRight = parseInt(getComputedStyle(items).right);
  if (!motionRight) {
    motionRight = 0;
  }
  if (motionRight > 0) {
    items.style.right = motionRight - item.offsetWidth + 'px';
  }
  else {
    items.style.right = +item.offsetWidth + 'px';
  }
  ;
});
