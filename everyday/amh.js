// CUSTOM HTML
// <script>

var botaoWhatsApp = document.querySelectorAll('#botaoConfirmaWhatsapp');

botaoWhatsApp.forEach(function(e) {
    e.addEventListener('click', function() {
        dataLayer.push({
            'event': 'whatsapp'
        });
    });
});


// </script>