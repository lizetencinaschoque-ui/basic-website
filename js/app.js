// js/app.js

// DOM interaction
function updateContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<p>This content was updated using JavaScript!</p>'; 
}

// Form handling
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        console.log('Email:', email);
    } else {
        console.log('Invalid email address.');
    }
}

// Email validation
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Logging function
console.log('App initialized. Ready to handle events.');

// Attach form submit handler
const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmit);
