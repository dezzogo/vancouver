//lp que funciona para testar a tag dele
// https://www.atriumbrazil.com.br/lp-atrium-v01/


//<script>
var formWppApoioSingular = document.querySelector('#FormPAS > div > div.elementor-field-group.elementor-column.elementor-field-type-submit.elementor-col-100.e-form__buttons > button');
var seletorSim = document.querySelector('#form-field-investimento-0');
var seletorNao = document.querySelector('#form-field-investimento-1');
var emailForm = document.querySelector('#form-field-email');
var phoneForm = document.querySelector('#form-field-field_3852157');

formWppApoioSingular.addEventListener('click', function(){
    event.preventDefault();
    var emailPreenchido = emailForm && emailForm.value.trim() !== '';
    var telefonePreenchido = phoneForm && phoneForm.value.trim() !== '';

    if(emailPreenchido && telefonePreenchido){
        if(seletorSim && seletorSim.checked){
            dataLayer.push({
                'event': 'lead_a'
            });
        }
        if(seletorNao && seletorNao.checked){
            dataLayer.push({
                'event': 'lead_b'
            });
        }
    }
})
</script>


//
function() {
    var regex = /\S+@\S+\.\S+/;
    var email;
  
    document.querySelectorAll('#form-field-email').forEach(function(e) {
      if(e.value) {
         email = e.value
      }
    });
    if(!email) return;
    if(!regex.test(email)) return;
    return email.toLowerCase();
  }

//PHONE
function() {
    var g_countryCode = '55';
    var g_getPhone;
   
    document.querySelectorAll('#form-field-field_3852157').forEach(function(e) {
      if(e.value) {
         g_getPhone = e.value
      }
    });
    g_getPhone = g_countryCode + g_getPhone;
    g_getPhone = g_getPhone.replace(/\D/g, '');
    if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
      return "+" + g_getPhone
    }
  }