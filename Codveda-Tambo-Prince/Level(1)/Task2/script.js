const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

function validateName() {
  const name = nameInput.value.trim();

  if (name === "") {
    nameError.textContent = "Name is required.";
    nameInput.classList.add("error");
    nameInput.classList.remove("success");

    return false;
  }

  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    nameInput.classList.add("error");
    nameInput.classList.remove("success");

    return false;
  }

  nameError.textContent = "";
  nameInput.classList.remove("error");
  nameInput.classList.add("success");

  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Email is required.";
    emailInput.classList.add("error");
    emailInput.classList.remove("success");

    return false;
  }

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    emailInput.classList.add("error");
    emailInput.classList.remove("success");

    return false;
  }

  emailError.textContent = "";
  emailInput.classList.remove("error");
  emailInput.classList.add("success");

  return true;
}

function validatePhone() {
  const phone = phoneInput.value.trim();

  const phonePattern = /^[0-9]{10}$/;

  if (phone === "") {
    phoneError.textContent = "Phone number is required.";
    phoneInput.classList.add("error");
    phoneInput.classList.remove("success");

    return false;
  }

  if (!phonePattern.test(phone)) {
    phoneError.textContent = "Phone number must contain 10 digits.";
    phoneInput.classList.add("error");
    phoneInput.classList.remove("success");

    return false;
  }

  phoneError.textContent = "";
  phoneInput.classList.remove("error");
  phoneInput.classList.add("success");

  return true;
}

function validatePassword() {
  const password = passwordInput.value;

  if (password === "") {
    passwordError.textContent = "Password is required.";
    passwordInput.classList.add("error");
    passwordInput.classList.remove("success");

    return false;
  }

  if (password.length < 8) {
    passwordError.textContent =
      "Password must be at least 8 characters.";

    passwordInput.classList.add("error");
    passwordInput.classList.remove("success");

    return false;
  }

  if (!/[A-Z]/.test(password)) {
    passwordError.textContent =
      "Password must contain an uppercase letter.";

    passwordInput.classList.add("error");
    passwordInput.classList.remove("success");

    return false;
  }

  if (!/[0-9]/.test(password)) {
    passwordError.textContent =
      "Password must contain a number.";

    passwordInput.classList.add("error");
    passwordInput.classList.remove("success");

    return false;
  }
  passwordError.textContent = "";
  passwordInput.classList.remove("error");
  passwordInput.classList.add("success");

  return true;
}
nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

phoneInput.addEventListener("input", validatePhone);

passwordInput.addEventListener("input", validatePassword);