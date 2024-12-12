
// PERSONALIZADO id === form_popup
var emailPopUp = //copiar apenas abaixo
function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('#input_comp-kenbsc3n');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}

var phonePopUp = 
function () {
    var g_countryCode = '55';
    var g_getPhone = document.querySelector('#input_comp-kenbsc3o4').value;
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, '');
    if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone
    }
}



