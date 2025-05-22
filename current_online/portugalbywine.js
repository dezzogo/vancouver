//<script>
var formContacto = document.querySelector("#cph1_modulocontactosformulario_lnk_enviar");
var formTailorMade = document.querySelector("#cph1_moduloformularioamedida_lnk_enviar");

formContacto.addEventListener('submit', function () {
        dataLayer.push({
            'event':'form_contacto'
        })
})

formTailorMade.addEventListener('submit', function () {
    dataLayer.push({
        'event':'form_tailor_made'
    })
})

//</script>

<script>
var formContacto = document.querySelector("#cph1_modulocontactosformulario_lnk_enviar");
var formTailorMade = document.querySelector("#cph1_moduloformularioamedida_lnk_enviar");

if (formContacto) {
    formContacto.addEventListener('click', function() {
        dataLayer.push({
            'event': 'form_contacto'
        })
    })
}

if (formTailorMade) {
    formTailorMade.addEventListener('click', function() {
        dataLayer.push({
            'event': 'form_tailor_made'
        })
    })
}
</script>