//validador para quando o form está disparando mais do que devia

//criar variáveis com os inputs do form e validar antes do submit do form se os valores são truthy, ou seja, não esão strings vazias, nulos ou indefinidos.

document.querySelector("body > div > div > div > div > div.tidio-1a050gg > div > div > form").addEventListener('submit', function () {

    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[name="email"]').value;

    if (name && telefone && email) {
        console.log('chat okokok')
        dataLayer.push({
            event: "chat_ezops"
        })
    }
})