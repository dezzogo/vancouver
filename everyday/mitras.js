//<script>

document.querySelector("body > div > div > div > div > div.tidio-1a050gg > div > div > form").addEventListener('click', function () {

    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[name="email"]').value;

    if (name && telefone && email) {
        console.log('chat okokok')
        dataLayer.push({
            event: "chat_ezops"
        })
    }
})

</script>