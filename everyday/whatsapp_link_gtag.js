//<script>
window.addEventListener('DOMContentLoaded', function() {
document.addEventListener('click', function(e) {
if (e.target.closest('a[href*="whatsapp"]') || e.target.closest('a[href*="wa.link"]')) {
gtag('event', 'conversion', {'send_to': 'AW-xxxxxxxxxx/yyyyyyyyyyyyyyyy'}); //
}
});
});
//</script>