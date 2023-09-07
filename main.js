const submitBtn = document.querySelector('.submit-btn');
const dismissBtn = document.querySelector('.dismiss-btn');
const emailInput = document.querySelector('#email');
const userEmail = emailInput.value;
const successCard = document.querySelector('.success');
const previewCard = document.querySelector('.preview');
// const fakeForm = document.querySelector('.fake-form');
// const pattern = "[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\\.[a-z]{2,}"
// const errorMessage = document.querySelector('#error-msg');

// emailInput.addEventListener('keydown', () => {
//   if(userEmail.match(pattern)) {
//    emailInput.classList.toggle("valid");
//    emailInput.classList.toggle("invalid");
//    emailInput.style.border = "#00ff00";
//   } else {
//    emailInput.classList.toggle("valid");
//    emailInput.classList.toggle("invalid");
//    errorMessage.innerHTML = "Valid Email Required";
//    errorMessage.style.color = "#ff0000";
//   }
//   if(emailInput.value === null) {
//    emailInput.classList.remove("valid");
//    emailInput.classList.remove("invalid");
//    errorMessage.remove();
//   }
// })

submitBtn.addEventListener('click', () => {
 if(userEmail === ' ') {
	 alert("Please enter an email address!")
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
