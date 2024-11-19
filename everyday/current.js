var emailEC = //copiar apenas abaixo
function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('[type="email"]');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}

var phoneEC = //copiar apenas abaixo
function () {
    var g_countryCode = '55';
    var g_getPhone = document.querySelector('#form-field-telefone').value;
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, '');
    if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone
    }
}


