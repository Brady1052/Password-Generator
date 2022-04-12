// Assignment Code
var generateBtn = document.querySelector("#generate");
let password = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Beginning of main function
function generatePassword() {

  //Function begins by starting with prompts
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be at least 9 characters but less than or equal to 128.");
    console.log(passwordLength)
  
    var numbers = confirm("Do you want to include numbers in your password");
    console.log(numbers)
    var special = confirm("Do you want to include special characters in your password?");
  
    var upperCases = confirm("Do you want to included upper case letters in your password?");
  
    var lowerCases = confirm("Do you want to include lower case letters in your password?");
    
    var minimumCount = 0;
//Begins evaluation of the user's response

//If the user selected yes to numbers then generate a random number between 1 and 9
    if (numbers){
      var number = Math.floor((Math.random() * 10) + 1);
      console.log(number)
      password.push(number)
      console.log('Passowrd: ' + number)
    }
    //If the user selected yes to special characters then generate a random special character
    var specialCh = '!@#$%^&*'
   if (special){
   var random = Math.floor((Math.random() * 10) + 1)
   } if (random == '1'){
   console.log('!')
   } else if (random == '2'){
     console.log('@')
   }else if (random == '3') {
     console.log('#')
   } else if (random == '4') {
     console.log('$')
   }else if (random == '5') {
     console.log('%')
   }else if (random =='6'){
   console.log('^')
} else if (random == '7'){
  console.log('&')
} else if (random == '8'){
  console.log('*')
} else if (random == '9'){
  console.log('(')
}else if (random == '10') {
  console.log(')')
} else {
  console.log('$')
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


