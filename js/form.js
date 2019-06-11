(function(){

const myForm = document.querySelector('.form');
const send = document.querySelector('#send');

send.addEventListener('click', function(e) {
  e.preventDefault();
  var formData = new FormData();
  formData.append('name', myForm.elements.name.value);
  formData.append('phone', myForm.elements.phone.value);
  formData.append('comment', myForm.elements.comment.value);
  formData.append('to', 'elenta1511@gmail.com');
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send(formData);
  xhr.addEventListener('load',() => {
    if(xhr.response.status == 1) {
      alert ("Ваш заказ успешно отправлен");
      document.myForm.reset();
    } else alert('Ваш заказ не отправлен, пожалуйста попробуйте позднее');
    
  });

});

})()