

window.scrollBy(0,1);
addEventListener("load", function () {
const item=document.querySelector(".slider__item");
var step = item.firstElementChild.getBoundingClientRect().width;
const arrowLeft=document.querySelector("#left");
const arrowRight=document.querySelector("#right");
const slidesInView=1; 
const maxRight=(item.children.length-slidesInView)*step;
const minRight=0; 
let currentRight = 0;

arrowRight.addEventListener('click', function(event) {
  event.preventDefault();
if (currentRight < maxRight){
  currentRight += step;
  item.style.right=`${currentRight}px`;
} else {
  currentRight=0;
  item.style.right=0;
}
});
arrowLeft.addEventListener('click', function(event) {
  event.preventDefault();
  if (currentRight > minRight){
    currentRight -= step;
    item.style.right=`${currentRight}px`;
  } else {
  currentRight=maxRight;
  item.style.right=maxRight + 'px';
  }
  });
});







 /* window.scrollBy(0,1);
  addEventListener("load", function () {
      var item = document.querySelector('.slider__item');
      var step = item.firstElementChild.getBoundingClientRect().width;
      console.log(step);
      console.log(step.clientWidth);
      console.log(step.getBoundingClientRect().width);
  });*/