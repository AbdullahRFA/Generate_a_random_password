/**
 * The above JavaScript code generates a random password with a specified length and copies it to the clipboard when requested.
 */
const passwordBox = document.getElementById("password");
const length = 20;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()-_=+|[]{}`~";

const allChars = upperCase + lowerCase + number + symbols;

function generatePassword() {
  const startIcon = document.getElementById("start");
  startIcon.classList.toggle("rotate");

  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

async function copyPassword() {
  try {
    passwordBox.select();
    await navigator.clipboard.writeText(passwordBox.value);
    alert("Password copied to clipboard!");
  } catch (err) {
    alert("Failed to copy password.");
  }
}
