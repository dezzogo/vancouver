//<script>

//shadow root wpp
var g_shadowInterval = setInterval(function () {
    var g_shadowRoot = document.querySelector('.shadow-smt-app-whatsapp');

    if (!g_shadowRoot) return;
    clearInterval(g_shadowInterval);
    console.log('shadow root found');

    g_shadowRoot.shadowRoot.addEventListener('click', function () {
        console.log('Whatsapp button clicked');
        dataLayer.push({
            'event': 'whatsapp_flutuante'
        });
    });
}, 500);

//</script>


//EMAIL
var email = //no needed, just to avoid errors


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

  /* ---------- x ---------- */

//PHONE NUMBER
var phoneNumber = //no needed, just to avoid errors

function() {
    var g_countryCode = '55';
    var g_getPhone;
   
    document.querySelectorAll('#input_comp-kgqaxezb').forEach(function(e) {
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