document.querySelector('#prospectBtn').addEventListener('click', function(){
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var phone = document.querySelector('#cellphone');
    var gym = document.querySelector('[name="company"]');

    if(name && email && phone && gym){
        dataLayer.push({
            'event':'form_lead'
        })
    }
})


function() {
    var g_countryCode = '55';
    var g_getPhone;
   
    document.querySelectorAll('#cellphone').forEach(function(e) {
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