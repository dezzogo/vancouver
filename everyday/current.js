
function a(){
  return document.querySelector("#wpcf7-f209-p6-o1 > form > p:nth-child(2) > label:nth-child(5) > span > input").value
  }




var emailEC = //copiar apenas abaixo
function () {
    var regex = /\S+@\S+\.\S+/;
    var email = document.querySelector('[type="email"]');
    if(!email) return;
    if(!regex.test(email.value)) return;
    return email.value;
}




