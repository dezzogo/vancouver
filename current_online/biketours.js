
//<script>
var contactUsForm = document.querySelector('#form_contact-form2');
var requestitineraryForm = document.querySelector('#frm_field_135_container > div > button');

contactUsForm.addEventListener('submit', function() {
    dataLayer.push({
        'event': 'contact_us_form'
    });
});

requestitineraryForm.addEventListener('click', function() {
    dataLayer.push({
        'event': 'request_itinerary_form'
    });
});


</script>

//EMAIL EC FORM CONTACT US
var email = //no needed, just to avoid errors
function() {
    var regex = /\S+@\S+\.\S+/;
    var email;
  
    document.querySelectorAll('#field_29yf4d3').forEach(function(e) {
      if(e.value) {
         email = e.value
      }
    });
    if(!email) return;
    if(!regex.test(email)) return;
    return email.toLowerCase();
  }


//EMAIL EC FORM REQUEST ITINERARY
var email = //no needed, just to avoid errors
function() {
    var regex = /\S+@\S+\.\S+/;
    var email;
  
    document.querySelectorAll('#field_29yf4d2').forEach(function(e) {
      if(e.value) {
         email = e.value
      }
    });
    if(!email) return;
    if(!regex.test(email)) return;
    return email.toLowerCase();
  }
