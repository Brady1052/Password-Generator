// Assignment Code
const generateBtn = document.querySelector('#generate');

//Creates empty array for pushing values to
let password = [];

// var password = generatePassword();
var passwordText = document.querySelector('#password');

//Beginning of main function
function generatePassword() {
  //Function begins by starting with prompts
  var numbers = confirm('Do you want to include numbers in your password');
  if (numbers) {
    var numbersLength = prompt(
      'Please enter the amount of numbers you want to include in your password'
    );
  }

  var special = confirm(
    'Do you want to include special characters in your password?'
  );
  if (special) {
    var specialCharacterLength = prompt(
      'Please enter the amount of special characters you would like to include in your password'
    );
  }

  var upperCases = confirm(
    'Do you want to included upper case letters in your password?'
  );
  if (upperCases) {
    var upperCaseLength = prompt(
      'Please enter the amount of upper case characters you would like to include in your password'
    );
  }

  var lowerCases = confirm(
    'Do you want to include lower case letters in your password?'
  );
  if (lowerCases) {
    var lowerCaseLength = prompt(
      'Please enter the amount of lower case characters you would like to include in your password'
    );
  }

  //Begins evaluation of the user's response

  //If the user selected yes to numbers then generate a random number between 1 and 9
  if (numbers) {
    randomNumber(numbersLength);
  }
  //If the user selected yes to special characters then generate a random special character
  if (special) {
    specialCharacter(specialCharacterLength);
  }
  if (lowerCases) {
    lowerCaseCharacter(lowerCaseLength);
  }
  if (upperCases) {
    upperCaseCharacter(upperCaseLength);
  }
  var randomPassword = password.join('');
  const passwordArray = randomPassword.split('');
  shufflePassword(passwordArray);
  const displayedPassword = passwordArray.join('');
  passwordText.textContent = displayedPassword;
}

//Function for generating a random number
function randomNumber(length) {
  let result = '';
  const numbers = '123456789';
  const numbersLength = numbers.length;
  for (var i = 0; i < length; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbersLength));
  }
  password.push(result);
}

//Function for generating a special character
function specialCharacter(length) {
  let result = '';
  const specialChars = '!@#$%^&*';
  const specialCharLength = specialChars.length;
  for (var i = 0; i < length; i++) {
    result += specialChars.charAt(
      Math.floor(Math.random() * specialCharLength)
    );
  }
  password.push(result);
}

//Function for generating a random uppercase character
function upperCaseCharacter(length) {
  let result = '';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const upperCaseCharsLength = upperCaseChars.length;
  for (var i = 0; i < length; i++) {
    result += upperCaseChars.charAt(
      Math.floor(Math.random() * upperCaseCharsLength)
    );
  }
  password.push(result);
}

//Function for generating a random lowercase character
function lowerCaseCharacter(length) {
  let result = '';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseCharsLength = lowerCaseChars.length;
  for (var i = 0; i < length; i++) {
    result += lowerCaseChars.charAt(
      Math.floor(Math.random() * lowerCaseCharsLength)
    );
  }
  password.push(result);
}

//Randomize the order in which the characters are ordered
function shufflePassword(password) {
  for (var i = password.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = password[i];
    password[i] = password[j];
    password[j] = temp;
    console.log(` I: ${password[i]}`);
    console.log(password[j]);
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', generatePassword);
