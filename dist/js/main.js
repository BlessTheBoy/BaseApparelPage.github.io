const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    verifyFormat();
});
const inputContainer = document.querySelector(".input-div");
const input = document.querySelector("input");
const errorMessage = document.getElementById("error-message");

function verifyFormat() {
    const emailValue = input.value;

    if (emailValue === '') {
        errorMessage.innerText = "Email cannot be empty";
        inputContainer.className = "input-div error";
    } else if (!validateEmail(emailValue)) {
        errorMessage.innerText = "Email is not valid"
        inputContainer.className = "input-div error";
    } else{
        inputContainer.className = "input-div success";
    }

    
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}