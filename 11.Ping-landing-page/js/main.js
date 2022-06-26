const form = document.querySelector(".main__form");
const error = document.querySelector(".error");
const emailInput = document.querySelector(".email-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector(".email-input").value;

  if (!inputValue.length > 0) {
    displayAlert("Whoops! It looks like you forgot to add your email", "red");
  } else if (emailIsValid(inputValue)) {
    displayAlert("Email submited", "green");
  } else {
    displayAlert("Please provide a valid email address", "red");
  }
});

function displayAlert(textError, color) {
  error.style = `display: block; color: ${color};`;
  error.textContent = textError;
  emailInput.style = `border: 1px solid ${color}`;

  setTimeout(() => {
    error.style = "display: none";
    error.textContent = "";
    emailInput.style = "border: 1px solid hsl(0, 0%, 59%)";
  }, 3000);
}

//Function that validates the email.
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
/* ======END-ALERT====== */
