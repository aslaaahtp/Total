// Select the form element and add an event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Fetch input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const cpassword = document.getElementById('cpassword').value;

        // Simple validation
        if (name === '') {
            alert('Name cannot be empty');
            return;
        }

        if (email === '') {
            alert('Email cannot be empty');
            return;
        }

        if (password === '') {
            alert('Password cannot be empty');
            return;
        }

        if (password !== cpassword) {
            alert('Passwords do not match');
            return;
        }

        // If all validations pass, you can proceed with form submission
        // Here you can add code to submit the form data to a server or perform other actions
        alert('Form submitted successfully');
        // Optionally, you can reset the form after submission
        form.reset();
    });
});
