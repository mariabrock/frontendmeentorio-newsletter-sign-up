const submitBtn = document.querySelector('.submit-btn');
const dismissBtn = document.querySelector('.dismiss-btn');
const successCard = document.querySelector('.success');
const previewCard = document.querySelector('.preview');
const emailInput = document.querySelector('#email');


emailInput.addEventListener('keydown', () => {
 const emailInput = document.querySelector('#email');
 const userEmail = emailInput.value;
 const errorMessage = document.querySelector('#error-msg');
 const pattern = "[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\\.[a-z]{2,}"
 if(userEmail.match(pattern)) {
  emailInput.classList.add("valid");
  emailInput.classList.remove("invalid");
  emailInput.style.color = "#000000";
  errorMessage.innerHTML = '';
 } else {
  emailInput.classList.add("invalid");
  emailInput.classList.remove("valid");
  errorMessage.innerHTML = "Valid Email Required";
  errorMessage.style.color = "#ff0000";
 }
 if(emailInput.value === null) {
  emailInput.classList.remove("valid");
  emailInput.classList.remove("invalid");
  errorMessage.innerHTML = '';
 }
})

submitBtn.addEventListener('click', () => {
 const emailInput = document.querySelector('#email');
 const userEmail = emailInput.value;
 if(userEmail === '') {
  alert("Please enter an email address!")
  emailInput.style.border = "solid red 2px";
 } else {
  console.log(userEmail);
  successCard.style.visibility = 'visible';
  previewCard.remove();
  document.querySelector(".user-email").innerText = userEmail;
 }
})

dismissBtn.addEventListener('click', (e) => {
 let target = e.target;
 target.parentElement.parentElement.remove();
})

// [A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,} - regex pattern for email
// https://www.youtube.com/watch?v=s2ThIxm7FyA&ab_channel=KevinPowell
// https://regexr.com/
// ^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
