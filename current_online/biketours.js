
<script>
var submitButton = document.querySelector('#frm_form_12_container > div > div.frm_continue_chat_wrapper.frm_submit > button.button.button-primary.frm-button-primary.frm_continue_chat.frm_button_submit');

submitButton.addEventListener('click', function() {
    dataLayer.push({
        'event': 'generate_lead'
    });
});
</script>