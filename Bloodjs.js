document.addEventListener('DOMContentLoaded', function () {
    const slotForm = document.getElementById('slotForm');
const messageBox = document.getElementById('messageBox');
    slotForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add logic here to handle the form submission, like sending data to a server.
        // For simplicity, let's just log the form data for now.
        showMessage();

        // You can reset the form or perform additional actions here if needed.
        slotForm.reset();
    });
     function showMessage() {
        // Display the message box
        messageBox.style.display = 'block';

        // You can add additional styling or animations if desired.
        
        // Hide the message box after a certain duration (e.g., 3 seconds)
        setTimeout(function () {
            messageBox.style.display = 'none';
        }, 3000); // Adjust the duration as needed
    }
});
function goToHome() {
    // Redirect to the home page or update the location based on your setup
    window.location.href = 'Bloodindex.html';
}

