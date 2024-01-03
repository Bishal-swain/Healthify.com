document.addEventListener('DOMContentLoaded', function () {
    const bloodTestForm = document.getElementById('bloodTestForm');
    const resultMessage = document.getElementById('resultMessage');

    bloodTestForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Assuming form validation passes, show a success message
        resultMessage.textContent = 'Your blood test appointment request has been submitted. We will contact you shortly.';
        bloodTestForm.reset();
    });
});
