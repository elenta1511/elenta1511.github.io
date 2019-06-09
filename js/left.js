const arrowLeft=document.querySelector("#left");
const arrowRight=document.querySelector("#right");
let currentRight = 0;

arrowRight.addEventListener('click', function(event) {
  event.preventDefault();
var item=document.querySelector(".slider__item");
var step = item.firstElementChild.getBoundingClientRect().width;
const slidesInView=1; 
const maxRight=(item.children.length-slidesInView)*step;
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
var item=document.querySelector(".slider__item");
var step = item.firstElementChild.getBoundingClientRect().width;
const minRight=0;
const slidesInView=1; 
const maxRight=(item.children.length-slidesInView)*step;
  if (currentRight > minRight){
    currentRight -= step;
    item.style.right=`${currentRight}px`;
  } else {
  currentRight = maxRight;
  item.style.right=maxRight + 'px';
  }
  });

