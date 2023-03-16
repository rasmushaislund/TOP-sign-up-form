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


let typedPassword = password.value
// let passwordValid = false;


// enable password confirmation

let enablePasswordConfirmation = () => {
    if (password.validity.valid === true) {
        confirmPassword.disabled = false;
        confirmPassword.setAttribute("pattern", typedPassword);
    } else {
        confirmPassword.disabled = true;
    }
}

password.addEventListener("change", enablePasswordConfirmation);


// password confirmation

let comparePassword = (typedPassword) => {
    if (passwordValid === true && typedPassword === confirmPassword.value) {
        confirmPassword.validity.valid = true;
    }

}


