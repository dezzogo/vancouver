//<script>

if(window.location.href.includes('thank-you-page')){
    dataLayer.push({
        'event':'purchase',
        'value' : document.querySelector('#TPAMultiSection_lbwrc46y > div > div > main > div > div > div.ynt7Fg > div:nth-child(1) > section.T9RwlW > div > div.aNdpCM > div > div:nth-child(3) > table > tbody > tr > td.sfUpqmL > span').innerText.replace(/\D/g,'')/100,
        'transaction_id' : document.querySelector('#TPAMultiSection_lbwrc46y > div > div > main > div > div > div.NKtsgY > div.fsB70T > span.oBEELa').innerText
    })
}

//</script>
