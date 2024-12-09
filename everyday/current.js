
//EMAIL
var emailEC = //copiar apenas abaixo
function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('.wpcf7-email');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}

//PHONE
var phoneEC = //copiar apenas abaixo
function () {
    var g_countryCode = '55';
    var g_getPhone = document.querySelector('.wpcf7-tel').value;
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, '');
    if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone
    }
}

// form classes contains -->  wpcf7-form
