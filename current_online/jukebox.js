var formJukebox = document.querySelector('form.elementor-form');
var emailJukebox = document.querySelector('#form-field-field_1d95660').value;

formJukebox.addEventListener('submit', function(){
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