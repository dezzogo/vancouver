// by PostMessage and Message Listeners
window.addEventListener('message', function(e) {
    console.log(e);
    dataLayer.push({event: e.data.data});
});



// by LocalStorage/SessionStorage
var myInterval = setInterval(function() {
    	
    // Coletando o valor (value) do localStorage - "true" ou "false"
      var localStorageItem = window.localStorage.getItem('ITEM NAME ON LOCALSTORAGE');
    
    // Se o item existir no localStorage e o valor dele for "true" disparar o código
    if (localStorageItem && localStorageItem === 'true') {
        clearInterval(myInterval); // parando o código - limpando o interval
        console.log('funciona!'); // log básico para funcionar
      
      // usar DataLayer.push aqui
    }   
  }, 1500);


// by DOM
// Criando um intervalo (temporizador)
var myInterval = setInterval(function() {
    
    // Seletor do iFrame abaixo
    var iFrameWhatsapp = document.querySelector('iframe#callbell-iframe').contentWindow.document; //Seletor do iFrame Aqui
  
    // Se o iFrame tiver carregado
    if (iFrameWhatsapp) {
             console.log('iframe existe'); // log avisando sobre carregamento do iFrame   
             clearInterval(meuInterval); // Limpar o intervalo para o código não rodar mais depois disso    
             var btnClick = iframeChat.querySelector('div.whatsapp-message'); // selecionando o botão WhatsApp dentro do iFrame
                       
             // Evento de clique do Whatsapp
             btnClick.addEventListener('click',function() {
                            console.log('whatsapp clicado') // log clique no WhatsApp
               
               // Disparo da Tag (dataLayer)
               dataLayer.push({
                   event: 'whatsapp-click'
               });
             });
         }
     }, 2000); // Disparar o código acima de 2 em 2 segundos até o iFrame ser carregado, após isso parar.