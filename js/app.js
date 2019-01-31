// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');



// Event Listeners

eventListeners();

function eventListeners() {
    // App init
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}



// Function

// App initialization
function appInit() {
    // Disable the send button on load
    sendBtn.disabled = true;
}

// Validate the fields
function validateField() {
    let errors;

    // Validate the Length of the field
    validateLength(this)

    // Validate Email
    if(this.type === 'email') {
        validateEmail(this)
    }

    // Both will return errors, then check if there're any errors
    errors = document.querySelectorAll('.error');

    // Check that the inputs are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length) {
            
        }
    }
}

// Validate the length of the field
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error')
    }
}

// Validate email (checks for @ in the value)
function validateEmail(field) {
    let emailText = field.value;

    // Check if the emailText contains the @ sign
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error')
    }
}