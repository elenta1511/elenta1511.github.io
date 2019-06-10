var list = document.querySelectorAll('li.reviews__elem');
for(i=0;i<list.length;i++);

var us = document.querySelectorAll('li.reviews__user-item');
for(i=0;i<us.length;i++);
us[0].classList.add('user-active');
list[0].classList.add('reviews_active');

function zero() {
  us[0].classList.add('user-active');
  list[0].classList.add('reviews_active');
  us[1].classList.remove('user-active');
  list[1].classList.remove('reviews_active');
  us[2].classList.remove('user-active');
  list[2].classList.remove('reviews_active');
};
function one() {
   us[1].classList.add('user-active');
  list[1].classList.add('reviews_active');
  us[0].classList.remove('user-active');
  list[0].classList.remove('reviews_active');
  us[2].classList.remove('user-active');
  list[2].classList.remove('reviews_active');
};
function two() {
 us[2].classList.add('user-active');
 list[2].classList.add('reviews_active');
 us[0].classList.remove('user-active');
 list[0].classList.remove('reviews_active');
 us[1].classList.remove('user-active');
 list[1].classList.remove('reviews_active');
};

us[0].addEventListener('click', zero);
us[1].addEventListener('click', one);
us[2].addEventListener('click', two);