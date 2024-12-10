
document.querySelector('[type="submit"]').addEventListener('click', function(){
    if(window.location.href.includes('c_campaign=614') && !document.body.innerText.includes('Required')){
        dataLayer.push({'event': 'formulario_madeira'});
        console.log('formulario_madeira')
    }
    if(window.location.href.includes('c_campaign=613') && !document.body.innerText.includes('Required')){
        dataLayer.push({'event': 'formulario_oeiras'});
        console.log('formulario_oeiras')
    }
})

//once per page