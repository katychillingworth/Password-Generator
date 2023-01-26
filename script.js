// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength = 0;
var allowNumericCharacters = false;
var allowSpecialCharacters = false;
var allowUpperCasedCharacters = false;
var allowLowerCasedCharacters = false;

// Function to prompt user for password options:
function getPasswordOptions() {
  passwordLength = prompt("Please choose a password length between 10 and 64 characters:");

  if (passwordLength < 10) {
    alert("Sorry! Please select a number higher than 10");
    getPasswordOptions()
  }
  else if (passwordLength > 64) {
    alert("Sorry! Please select a number lower than 64");
    getPasswordOptions()
  }
  else {
    allowUpperCasedCharacters = confirm("Would you like your password to contain uppercase characters?");
    allowLowerCasedCharacters = confirm("Would you like your password to contain lowercase characters?");
    allowNumericCharacters = confirm("Would you like your password to contain numerical characters?");
    allowSpecialCharacters = confirm("Would you like your password to contain special characters?");
  }

  if (!allowLowerCasedCharacters && !allowNumericCharacters && !allowUpperCasedCharacters && !allowSpecialCharacters) {
    alert("Please choose at least one of these options!")
    getPasswordOptions()
  }
}

// Function to generate password with user input
function generatePassword(length, allowNumbers, allowSpecial, allowUpper, allowLower) {
  var allOptions = [];

  if (allowNumbers) {
    allOptions.push(numericCharacters);
  }

  if (allowSpecial) {
    allOptions.push(specialCharacters);
  }

  if (allowUpper) {
    allOptions.push(upperCasedCharacters);
  }

  if (allowLower) {
    allOptions.push(lowerCasedCharacters);
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    var characterSet = getRandom(allOptions);
    var character = getRandom(characterSet);

    password += character;
    console.log(character);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
function getRandom(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword(passwordLength, allowNumericCharacters, allowSpecialCharacters, allowUpperCasedCharacters, allowLowerCasedCharacters);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);