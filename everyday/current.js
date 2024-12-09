

function () {
  var regex = /\S+@\S+\.\S+/;
  var email = document.querySelector('[name="email"]');
  if(!email) return;
  if(!regex.test(email.value)) return;
  return email.value;
}

function () {
  var g_getPhone = document.querySelector('#rd-phone_field-m0r0s40l').value.replace(/\D/g, '')
  if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
     return "+" + g_getPhone
  }
}


