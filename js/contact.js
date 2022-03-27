const form = document.querySelector("#contact-base");

const name = document.querySelector("#contact-name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#contact-email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#contact-password");
const passwordError = document.querySelector("#passwordError");

const confirmPass = document.querySelector("#contact-confirmpassword");
const confirmPassError = document.querySelector("#confirmError");


const success = document.querySelector("#success");

function validateForm(){
    event.preventDefault();
    var valid;

    const checkName = () => {
        if (checkLength(name.value, 0) === true){
            nameError.style.display = "none";
            valid = true;
        } else{
            nameError.style.display = "block";
            valid = false;
        }
        return valid;
    }
    

    const checkEmail = () => {
        if (validateEmail(email.value) === true){
            emailError.style.display = "none";
            valid = true;
        } else{
            emailError.style.display = "block";
            valid = false;
        }
        return valid;
    }

    const checkPassword = () => {
        if (checkLength(password.value, 2) === true){
            passwordError.style.display = "none";
            valid = true;
        } else{
            passwordError.style.display = "block";
            valid = false;
        }
        return valid;
    }

    const checkConfirmPass = () => {
        if (password.value == confirmPass.value){
            confirmPassError.style.display = "none";
            valid = true;
        } else{
            confirmPassError.style.display = "block";
            valid = false;
        }
        return valid;
    }

    let NameValid = checkName(),
    EmailValid = checkEmail(),
    PasswordValid = checkPassword(),
    ConfirmPassValid = checkConfirmPass();
    
    let FormValid = NameValid && EmailValid && PasswordValid && ConfirmPassValid;

    if (FormValid) {
        success.style.display = "block"
    }
};



form.addEventListener("submit", validateForm)

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else{
        return false;
    }
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}