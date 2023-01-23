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

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var item = arr[randomIndex];
  return item;
}

// Add event listener to bring up the first prompt:
var generateButton = document.querySelector("#generate");

generateButton.addEventListener("click", function () {
  getPasswordOptions()
})

// Function to prompt user for password options:
function getPasswordOptions() {
  var passwordLength = prompt("Please choose a password length between 10 and 64 characters:")
  if (passwordLength < 10) {
    alert("Sorry! Please select a number higher than 10");
    getPasswordOptions()
  }
  else if (passwordLength > 64) {
    alert("Sorry! Please select a number lower than 64");
    getPasswordOptions()
  }
  else {
    var allowUpperCasedCharacters = confirm("Would you like your password to contain uppercase characters?");
    var allowLowerCasedCharacters = confirm("Would you like your password to contain lowercase characters?");
    var allowNumericCharacters = confirm("Would you like your password to contain numerical characters?");
    var allowSpecialCharacters = confirm("Would you like your password to contain special characters?");

    // TODO: Generate password using choices
  }
}

// Function to generate password with user input
// TODO: Add parameters for all 5 options
function generatePassword() {
  // TODO: Define password generation algorithm
  // Important factors are:
  // - Password length
  // - Randomised character from _all_ potential options

  // var password = "";
  // for (var i = 0; i < numericCharacters; i++) {
  //   password = password + getRandom(characterChoices);
  //   return password
  // }
}

// Get references to the #generate element
generatePassword()
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);