//validador para quando o form está disparando mais do que devia

//criar variáveis com os inputs do form e validar antes do submit do form se os valores são truthy, ou seja, não esão strings vazias, nulos ou indefinidos.

document.querySelector("#FORM_SELECTOR").addEventListener('submit', function () {

    var name = document.querySelector('[name="name"]').value
    var telefone = document.querySelector('[name="phone_number"]').value
    var email = document.querySelector('[name="email"]').value

    if (name && telefone && email) {
        dataLayer.push({
            event: "form_submited"
        })
    }
})