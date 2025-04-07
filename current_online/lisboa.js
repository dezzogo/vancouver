//<script>
document.querySelectorAll('a[href*="whatsapp"]').forEach(function(e){
    e.addEventListener('click', function(){
        dataLayer.push({'event':'whatsapp_lisboa'})
    })
})
//</script>