const form = document.getElementById('form');
const button = document.getElementById('button');

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
        submitEmail();
    }

    
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

 var url = 'https://script.google.com/macros/s/AKfycbzT6uAnfuX5vfSrQ6z0lM1HwX9hnynCG2YhwlU442WKqGdvZXX-/exec';

function submitEmail(){
    var $formP = $('#form');
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $formP.serializeObject()
  });
}