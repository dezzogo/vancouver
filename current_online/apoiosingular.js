//<script>
var formWppApoioSingular = document.querySelector('#FormPAS');
var seletorSim = document.querySelector('#form-field-investimento-0');
var seletorNao = document.querySelector('#form-field-investimento-1');
var emailForm = document.querySelector('#form-field-email')
var phoneForm = document.querySelector('#form-field-field_3852157');

formWppApoioSingular.addEventListener('submit', function(){
    event.preventDefault();
    if(emailForm && phoneForm){
        if(seletorSim && seletorSim.checked){
            dataLayer.push({
                'event':'lead_a'
            })
        }
        if(seletorNao && seletorNao.checked){
            dataLayer.push({
                'event':'lead_b'
            })
        }
    }
})
<script>