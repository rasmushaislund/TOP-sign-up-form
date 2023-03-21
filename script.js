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

//password help

const passwordRequirements = document.querySelectorAll(".error-psw")
// const passwordIconHelp = document.querySelectorAll(".error-psw > img");
// const passwordParaHelp = document.querySelectorAll(".error-psw > p");


// NON-DOM VARIABLES


let typedPassword;
let passwordValid = false;


// show password requirements

let showPasswordRequirements = () => {
    passwordRequirements.forEach(requirement => {
        requirement.style.visibility = "visible"
    })
}

password.addEventListener("focusin", showPasswordRequirements);


// hide password requirements

// let hidePasswordRequirements = () => {
//     passwordRequirements.forEach(requirement => {
//         requirement.style.visibility = "hidden"
//     })
// }

// password.addEventListener("focusout", hidePasswordRequirements);

// enable password confirmation field

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

password.addEventListener("input", enablePasswordConfirmation);


// initiate password confirmation feature incl. user error message

let comparePassword = () => {
    if (confirmPassword.value === typedPassword && passwordValid === true) {
        confirmPassword.validity.valid = true;
        errorConfirmPassword.textContent = "";
    } else {
        confirmPassword.validity.valid = false;
        errorConfirmPassword.textContent = "Passwords do not match"
        errorConfirmPassword.style.color = "red"
        if (confirmPassword.value === "") {
            errorConfirmPassword.textContent = "";
        }
    }
}

confirmPassword.addEventListener("input", comparePassword);


// error message for email input

let showEmailError = () => {
    if (email.validity.valid === true || email.value === "") {
        errorEmail.textContent = "";
    } else {
        errorEmail.textContent = "Entered e-mail is not valid";
        errorEmail.style.color = "red";
    }
}

email.addEventListener("input", showEmailError);


// error message for phone input

let showPhoneError = () => {
    if (phoneNumber.validity.valid === true || phoneNumber.value === "") {
        errorPhone.textContent = "";
    } else {
        errorPhone.textContent = "Entered phone number is not valid";
        errorPhone.style.color = "red";
    }
}

phoneNumber.addEventListener("input", showPhoneError);



// END ///////////////////////////////////////////////////////////////////


