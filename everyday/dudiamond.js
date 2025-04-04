// email compra  
// #secondary-column > div:nth-child(2) > div > div:nth-child(2) > div.user-detail-content > p

// value
// #secondary-column > div.summary.d-none.d-md-block > div > div > table > tfoot > tr > td.text-right.table-price > span

// transaction id
// #__next > div.container.main-container > div.row.success-order-id > div > div
// (precisa ser formatado, vem junto da palavra PEDIDO http://screen/4sVNdjgfggY3QiX)

// página pagamento confirmado
// http://screen/ASSbzcEUizCYK5w


//<script>
//   window.addEventListener('DOMContentLoaded', function() {
//     var pgtoConfirmado = "Seu pagamento foi confirmado";
//     if(document.body.innerText.includes(pgtoConfirmado)) {
//       gtag('set', 'user_data', {
//         'email' : document.querySelector('#secondary-column > div:nth-child(2) > div > div:nth-child(2) > div.user-detail-content > p').innerText.split("\n").pop()
//       });
//       gtag('event', 'conversion', {
//         'send_to' : 'AW-11139901293/tuP6CJqo2ZgYEO3O9b8p',
//         'value' : document.querySelector('#secondary-column > div.summary.d-none.d-md-block > div > div > table > tfoot > tr > td.text-right.table-price > span').innerText.replace(/\D/g,'')/100,
//         'currency' : 'BRL',
//         'transaction_id' : document.querySelector('#__next > div.container.main-container > div.row.success-order-id > div > div').innerText.replace('Pedido: #', '')
//       });
//     }
//   });
// </script>


// function (){
//     return document.querySelector('#__next > div.container.main-container > div.row.success-order-id > div > div').innerText.replace('Pedido: #', '');
// }

// function() {
//     var regex = /\S+@\S+\.\S+/;
//     var email;
  
//     document.querySelectorAll('#secondary-column > div:nth-child(2) > div > div:nth-child(2) > div.user-detail-content > p').forEach(function(e) {
//       if(e.value) {
//          email = e.value
//       }
//     });
//     if(!email) return;
//     if(!regex.test(email)) return;
//     return email.toLowerCase();
//   }

  //<script>
  var pgtoConfirmado = "Seu pagamento foi confirmado";
  if(document.body.innerText.includes(pgtoConfirmado)) {
    dataLayer.push({
      'event' : 'purchase'
    });
  }
</script>

function (){
    return document.querySelector('#secondary-column > div:nth-child(2) > div > div:nth-child(2) > div.user-detail-content > p').innerText.split("\n").pop()
      };

      const obterUltimaLinha = function() {
        return document.querySelector('#secondary-column > div:nth-child(2) > div > div:nth-child(2) > div.user-detail-content > p').innerText.split("\n").pop();
    };


//<script>
  var pgtoConfirmado = "Seu pagamento foi confirmado";
  var emailCompra = document.querySelector('#secondary-column > div:nth-child(2) > div > div:nth-child(2) > div.user-detail-content > p').innerText;

  if(document.body.innerText.includes(pgtoConfirmado)) {
    dataLayer.push({
      'event' : 'purchase',
      'email' : emailCompra
    });
  }
</script>
    