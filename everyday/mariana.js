//wpp colortelha

function getWppPhone() {
    var phoneNumbers = document.querySelectorAll('#txtTelefone2');
    var ddds = document.querySelectorAll('input#txtDDDTelefone.f-numero-int');

    if (phoneNumbers.length > 1 && ddds.length > 1) {
        var finalPhone = phoneNumbers[phoneNumbers.length - 1].value.replace(/\D/g, '');
        var ddd = ddds[ddds.length - 1].value.replace(/\D/g, '');
        return "+55" + ddd + finalPhone;
    }
}


var phoneNumbers = 
    var ddds = 


    var wppPhone = document.querySelector('#txtTelefone2');
    var wppDdd = document.querySelector('#txtDDDTelefone2');


    var wpppppp = function () {
        var wppPhone = document.querySelector('#txtTelefone2').value;
    var wppDdd = document.querySelector('#txtDDDTelefone2').value;
        var finalWppPhone = wppPhone.replace(/\D/g, '');
        if(finalWppPhone.length >= 8 && finalWppPhone.length <= 9) {
            return "+55" + wppDdd + finalWppPhone;
        }
    }




