var botaoForm = document.querySelector('[type="submit"]')
var emailForm = function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('[type="email"]');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}

botaoForm.addEventListener('click', function(){
    var emailValue = emailForm()
    if(emailForm) {
        dataLayer.push({
            'event': 'form_submit',
            'email': emailValue
        })
    }
})