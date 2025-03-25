var formChat = document.querySelector('body > div > div > div > div > div.tidio-1a050gg > div > div > form');
var email = 


document.querySelector("body > div > div > div > div > div.tidio-1a050gg > div > div > form").addEventListener('submit', function () {

    var name = document.querySelector('body > div > div > div > div > div.tidio-1a050gg > div > div > form > div.user-data-modal-fields > div:nth-child(1) > input[type=text]').value;
    var email = document.querySelector('body > div > div > div > div > div.tidio-1a050gg > div > div > form > div.user-data-modal-fields > div:nth-child(2) > input[type=email]').value;

    if (name && email) {
        dataLayer.push({
            event: "chat_ezops"
        })
    }
})
