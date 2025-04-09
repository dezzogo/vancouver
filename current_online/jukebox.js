var formBtnJukebox = document.querySelector('form > div > div.elementor-field-group.elementor-column.elementor-field-type-submit.elementor-col-100.e-form__buttons > button');
var emailJukebox = document.querySelector('#form-field-field_1d95660').value;

formBtnJukebox.addEventListener('click', function(){
    if(emailJukebox){
        dataLayer.push({
            'event':'form_jukebox'
        })
    }
})


var emailEC = //only for ec
function() {
    var regex = /\S+@\S+\.\S+/;
    var email;
  
    document.querySelectorAll('[type="email"]').forEach(function(e) {
      if(e.value) {
         email = e.value
      }
    });
    if(!email) return;
    if(!regex.test(email)) return;
    return email.toLowerCase();
  }