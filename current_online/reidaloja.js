//value
function(){
    return document.querySelector('#my-orders-table > tfoot > tr.grand_total.last > td.last.a-right > strong > span').innerText.replace(/\D/g,'')/100;
}

//transaction id
function(){
    return document.querySelector('body > div.wrapper > div > div.main-container.col1-layout > div > div.container.col-main-containter > div:nth-child(1) > div > div > div.tm-checkoutsuccess-top > div:nth-child(1) > div > p:nth-child(4) > a').innerText
}

//phone ec
function(){
    var data = document.querySelector('address').innerText;
    var regex = data.match(/T:\s*\((\d{2})\)\s*(\d{4,5})-(\d{4})/);
    if (regex){
        var phoneNumber = regex[1]+regex[2]+regex[3]
        if(phoneNumber >= 11 && phoneNumber <= 15) {
            return "+" + phoneNumber;
        }
    }
}

//<script>

//</script>