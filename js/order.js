const myForm = document.querySelector('.form');
const send = document.querySelector('#send');
send.addEventListener('click', event => {
 event.preventDefault();
 if(validateForm(myForm)) {
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
      alert.addEventListener('click',function(){
      });
    } else alert('Ваш заказ не отправлен, пожалуйста попробуйте позднее');
    
  });
  }
});

function validateForm(form) {
  let valid = true;
  if(!validateField(form.elements.name)) {
    valid = false;
  }
  if(!validateField(form.elements.phone)) {
    valid = false;
  }
  if(!validateField(form.elements.comment)) {
    valid = false;
  }
  return valid;
}

function validateField(label) {
  if(!label.checkValidity()) {
    label.nextElementSibling.textContent = label.validationMessage;
    return false;
  } else {
    label.nextElementSibling.textContent = '';
    return true;
  }
}


//var myF = new formData();
  //myF.append('name', myForm.elements.name.value);
//  myF.append('phone', myForm.elements.phone.value);
//  myF.append('comment', myForm.elements.comment.value);
//  myF.append('to', 'elenta1511@gmail.com');
//  var xhr = new XMLHttpRequest();
//  xhr.responseType = 'json';
//  xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
//  xhr.send(formD);
// return xhr;