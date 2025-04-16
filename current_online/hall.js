//EVENTO TAG CONVERSAO OTIMIZADA
//<script>
var paymentButton = document.querySelector('.css-1b7k2jn');
var paymentEmail = document.querySelector('.css-1e5gijs')
paymentButton.addEventListener('click', function(){
    if (/\S+@\S+\.\S+/.test(paymentEmail)) {
        dataLayer.push({
        'event':'enhanced_conversion',
        'email':paymentEmail
    })
}})
//</script>


//STORE
//<script>

var emailStore = document.querySelector('SELETOR-EMAIL').innerText;
var valueStore = document.querySelector('SELETOR-VALUE').innerText.replace(/\D/g,'')/100;
var formStore = document.querySelector('FORM-COMPRA');

formStore.addEventListener('submit', function(){
    dataLayer.push({
        'event':'purchase_store',
        'value':valueStore,
        'email':emailStore 
    })
})

//</script>


//WORKSHOPS
var ecWorkshop = //ignore
//this ---> var emailWorkshop = 
function() {
    var regex = /\S+@\S+\.\S+/;
    var email;
  
    document.querySelectorAll('.css-1e5gijs').forEach(function(e) {
      if(e.innerText) {
         email = e.innerText
      }
    });
    if(!email) return;
    if(!regex.test(email)) return;
    return email.toLowerCase();
  }


//<script>
var emailWorkshop = document.querySelector('.css-1e5gijs').innerText;
var valueWorkShop = document.querySelector('#pylon > div > main > form > div > div > div > div:nth-child(2) > div.css-trha6c > p:nth-child(2) > strong').innerText.replace(/\D/g,'')/100;

var formWorkshop = document.querySelector('SELETOR-FORM');
formWorkshop.addEventListener('submit',function(){
    dataLayer.push({
        'event':'purchase_workshop',
        'value':valueWorkShop,
        'email':emailWorkshop 
    })
})
//</script>
