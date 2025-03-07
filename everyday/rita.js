var ritaConsulta = 

function(){
    return document.querySelector('.order-total > td:nth-child(2) > strong:nth-child(1) > span:nth-child(1) > bdi:nth-child(1)').innerText.replace(/\D/g,'')/100
}