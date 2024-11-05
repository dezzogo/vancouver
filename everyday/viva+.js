var emailV = 
function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('.email67251f5ec6b4d');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}