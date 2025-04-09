var formChat = document.querySelector('body > div > div > div > div > div.tidio-1a050gg > div > div > form');
var email = 


document.querySelector("body > div > div > div > div > div.tidio-1a050gg > div > div > form").addEventListener('submit', function () {
    var btnMsg = document.querySelector('#send-button')
    btnMsg.addEventListener('click', function(){
        dataLayer.push({
            event: "chat_ezops"
        })
    })
})


//<script>  
  // Criando um intervalo (temporizador)
  var myInterval = setInterval(function() {
    
  // Seletor do iFrame abaixo
  var lyro = document.querySelector('').contentWindow.document;

  if (lyro) {
           clearInterval(meuInterval);  
           var btnClick = iframeChat.querySelector('div.whatsapp-message'); // selecionando o botão WhatsApp dentro do iFrame
					 
           // Evento de clique do Whatsapp
           document.querySelector("body > div > div > div > div > div.tidio-1a050gg > div > div > form").addEventListener('submit', function () {
            var btnMsg = document.querySelector('#send-button')
            btnMsg.addEventListener('click', function(){
                dataLayer.push({
                    event: "chat_ezops"
                })
            })
        });
       }
   }, 2000); // Disparar o código acima de 2 em 2 segundos até o iFrame ser carregado, após isso parar.
//</script>


//<script>

var emailFooter = 
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

//<script> 
//RODAPE
var formFodape = document.querySelector("#rd-form-luhazmne > form");
var formblog = document.querySelector("#rd-form-luhazmne > form");
var formCases = document.querySelector("#rd-form-luhazmne > form");

  document.querySelector("#rd-form-luhazmne > form").addEventListener('submit', function () {

    var email = document.querySelector('#rd-email_field-m8ssi28n').value;

    if (email) {
        dataLayer.push({
            event: "form_rodape"
        })
    }
})


//BLOG
var formFodape = document.querySelector("#rd-form-luhazmne > form");
var formblog = document.querySelector("#rd-form-luhazmne > form");
var formCases = document.querySelector("#rd-form-luhazmne > form");

  document.querySelector("#rd-form-luhazmne > form").addEventListener('submit', function () {

    var email = document.querySelector('#rd-email_field-m8ssi28n').value;

    if (email) {
        dataLayer.push({
            event: "form_rodape"
        })
    }
})


//CASES
var formFodape = document.querySelector("#rd-form-luhazmne > form");
var formblog = document.querySelector("#rd-form-luhazmne > form");
var formCases = document.querySelector("#rd-form-luhazmne > form");

  document.querySelector("#rd-form-luhazmne > form").addEventListener('submit', function () {

    var email = document.querySelector('#rd-email_field-m8ssi28n').value;

    if (email) {
        dataLayer.push({
            event: "form_rodape"
        })
    }
})

//</script>
