/*const arrowLeft=document.querySelector("#left");
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
  });*/

  var moveSlide = function(container, slideNum) {
    var items = container.find('.slider__one');
    activeSlide = items.filter('.active'),
    reqItem = items.eq(slideNum),
    reqIndex = reqItem.index(),
    list = container.find('.slider__item'),
    duration = 500;
    if(reqItem.length) {
      list.animate({
        'left': -reqIndex * 100 + '%'
      }, duration,function() {
        activeSlide.removeClass('active');
        reqItem.addClass('active');
      
      });
    }
  };
  $('.arrow__pic').on('click',function(e) {
    e.preventDefault();
    var $this = $(this),
    container = $this.closest('.container_assortment'),
    items = $('.slider__one', container),
    activeItem = items.filter('.active'),
    nextItem = activeItem.next(),
    prevItem = activeItem.prev();
    if ($this.hasClass('arrow_left')) {
      if(nextItem.length) {
        moveSlide(container, nextItem.index());
      } else {
        moveSlide(container, items.first().index());
      }
    } else {
      if (prevItem.length) {
        moveSlide(container, prevItem.index());
      } else {
        moveSlide(container, items.last().index());
      }
    }
  });

