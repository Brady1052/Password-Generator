// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
var generateBtn = prompt("Please select password criteria")
// Write password to the #password input
function writePassword() {
  var password = document.querySelector("password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

