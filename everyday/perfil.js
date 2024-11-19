// https://souperfil.com.br/matriculas/

// validar envio do form pelo click no botao + regex email + regex phone


var emailEC = function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('[type="email"]');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}

var phoneEC = function () {
    var g_countryCode = '55';
    var g_getPhone = document.querySelector('[type="phone"]').value;
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, '');
    if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone
    }
}

var formButton = document.querySelector('.forminator-button-submit');
formButton.addEventListener('click', function(event) {
    var emailField = document.querySelector('input[type="email"]');
    var telField = document.querySelector('[name="phone-1"]');
    
    if (emailField.value !== "" && telField.value !== "") {
        console.log("form_enviado");
        dataLayer.push({event: 'send_form'});   
    }
});

