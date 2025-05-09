<script>
var formContato = document.querySelector('#wpforms-form-1888');
formContato.addEventListener('submit', function(){
    dataLayer.push({
        'event':'form_enviado'
    })
})
</script>