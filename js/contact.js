function updateContactInfo() {
    if (document.getElementById('contactMethodEmail').checked) {
        document.getElementById('contactInfoLabel').innerText = 'Email Address';
        document.getElementById('contactInfo').type = 'email';
        document.getElementById('contactInfo').placeholder = 'Your Email Address';
    } else {
        document.getElementById('contactInfoLabel').innerText = 'Phone Number';
        document.getElementById('contactInfo').type = 'tel';
        document.getElementById('contactInfo').placeholder = 'Your Phone Number';
    }
}