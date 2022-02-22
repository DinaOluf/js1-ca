
const form = document.querySelector("form");
const yourName = document.querySelector("#yourName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

function validateName(name) {
  const regEx = /^[a-zA-Z ]*$/;
  const patternMatches = regEx.test(name);
  return patternMatches;
}

function checkLength(value, len) {
  if (value.trim().length >= len) {
      return true;
  } else {
      return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function submitForm(event){
	event.preventDefault();

  const nameError = document.querySelector(".name-err-container");
  const subjectError = document.querySelector(".subject-err-container");
  const emailError = document.querySelector(".email-err-container");
  const addressError = document.querySelector(".address-err-container");
  

  if (!validateName(yourName.value) || !yourName.value.trim().length >= 1){
    nameError.innerHTML = '<span class="error-form">- Please fill in your name</span>';
    console.log("Name error");
  } else {
    nameError.innerHTML = "";
  }

  if (!checkLength(subject.value, 10)){
    subjectError.innerHTML = '<span class="error-form">- Subject must have minimum 10 characters</span>';
    console.log("subject error");
  } else {
    subjectError.innerHTML = "";
  }

  if (!validateEmail(email.value)){
    emailError.innerHTML = '<span class="error-form">- Please fill in your Email</span>';
    console.log("email error");
  } else {
    emailError.innerHTML = "";
  }

  if (!checkLength(address.value, 25)){
    addressError.innerHTML = '<span class="error-form">- Address must have minimum 25 characters</span>';
    console.log("address error");
  } else {
    addressError.innerHTML = "";
  }

  if(validateName(yourName.value) && yourName.value.trim().length >= 1 && checkLength(subject.value, 10) && validateEmail(email.value) && checkLength(address.value, 25)) {
    form.innerHTML += '<div class="success-msg">Success!</div>';
    form.reset();
    console.log("form succeeded");
}}; 

form.addEventListener("submit", submitForm);


document.getElementById('back').addEventListener('click', () => {
  history.back();
});
