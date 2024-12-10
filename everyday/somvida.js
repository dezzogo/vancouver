
// POPUP id === form_popup
var emailPopUp = //copiar apenas abaixo
function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('#form_popup #form-field-field_63f9dd9');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}

var phonePopUp = 
function () {
    var g_countryCode = '55';
    var g_getPhone = document.querySelector('#form_popup #form-field-field_b79a540').value;
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, '');
    if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone
    }
}


// PRINCIPAL (sem id)
var emailPrincipal = 
function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('#form-field-email');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}

var phonePrincipal = 
function () {
    var g_countryCode = '55';
    var g_getPhone = document.querySelector('#form-field-whatsapp').value;
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, '');
    if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone
    }
}


// LP id === form_lp
var emailLp = 
function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('#form_lp #form-field-field_63f9dd9');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}

var phoneLp = 
function () {
    var g_countryCode = '55';
    var g_getPhone = document.querySelector('#form_lp #form-field-field_b79a540').value;
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, '');
    if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone
    }
}

