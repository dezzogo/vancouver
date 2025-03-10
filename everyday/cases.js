//collect case numbers from appointments
let casos = [];
document.querySelectorAll('a').forEach(function(link) {
    if (link.href.includes('cases.')) {
        casos.push(link.innerText)        
    }
});
console.log(casos);