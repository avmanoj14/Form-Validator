const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//showError Function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//showSuccess Function
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';   
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input , 'Email is not valid');
    }
}

// checkRequired function
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if (input.value.trim() === '') {
            showError(input , `${getFieldName(input)} is required`);
        } else {
            showSuccess (input);
        }
    });
}


//checkLength function
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

//checkPasswordsMatch Function

function checkPasswordsMatch (input1, input2) {
    if (input1.value != input2.value) {
        showError(input2, 'Passwords are not matching');
    }
}

//getFieldName function
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();


    checkRequired([username, email, password, password2]);
    checkEmail(email);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordsMatch(password, password2);


    // if (username.value === '' ) {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }

    // if (email.value === '' ) {
    //     showError(email, 'Email is required');
    // } else if(!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }

    // if (password.value === '' ) {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value === '' ) {
    //     showError(password2, 'Password2 is required');
    // } else {
    //     showSuccess(password2);
    // }
});