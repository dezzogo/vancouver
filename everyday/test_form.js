//validador para quando o form está disparando mais do que devia

//criar variáveis com os inputs do form e validar antes do submit do form se os valores são truthy, ou seja, não esão strings vazias, nulos ou indefinidos.

document.querySelector('SELETOR_FORM').addEventListener('submit', function () {

    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[type="email"]').value;
    var phone = document.querySelector('[type="tel"]').value;

    if (name && email && phone) {
        dataLayer.push({
            'event':'form_submitted' //ou o nome que quiser do evento aqui
        })
    }
})