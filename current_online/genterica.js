var meetingForm = document.querySelector('#schedule-meeting-button');
if(meetingForm){
    var email = document.querySelector('[type="email"]').value;
    if(email){
        dataLayer.push({
            'event':'form_conferencia'
        })
    }
}