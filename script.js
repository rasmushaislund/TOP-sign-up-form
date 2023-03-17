// START //


// DOM VARIABLES

//input fields
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#telephone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const inputFields = document.querySelectorAll("input");

//error messages

const errorFirstName = document.querySelector("#error-first-name");
const errorLastName = document.querySelector("#error-last-name");
const errorEmail = document.querySelector("#error-email");
const errorPhone = document.querySelector("#error-phone");
const errorPassword = document.querySelector("#error-password");
const errorConfirmPassword = document.querySelector("#error-confirm-password");


// NON-DOM VARIABLES


let typedPassword;
let passwordValid = false;
// let passwordValid = false;


// enable password confirmation

let enablePasswordConfirmation = () => {
    if (password.validity.valid === true) {
        typedPassword = password.value
        passwordValid = true;
        confirmPassword.disabled = false;
        confirmPassword.pattern = typedPassword;
    } else {
        passwordValid = false;
        confirmPassword.disabled = true;
    }
}

password.addEventListener("change", enablePasswordConfirmation);


// password confirmation

let comparePassword = () => {
    if (confirmPassword.value === typedPassword && passwordValid === true) {
        confirmPassword.validity.valid = true;
    } else {
        confirmPassword.validity.valid = false;
    }
}

confirmPassword.addEventListener("oninput", comparePassword);


