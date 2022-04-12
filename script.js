// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creates empty array for pushing values to
let password = [];
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Beginning of main function
function generatePassword() {

  //Function begins by starting with prompts
    var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be at least 9 characters but less than or equal to 128.");
    console.log(passwordLength)
  
    var numbers = confirm("Do you want to include numbers in your password");
    
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
      console.log('Password: ' + number)
    }
    //If the user selected yes to special characters then generate a random special character
   if (special){
   specialCharacter(5)
   }
   if(lowerCases){
     lowerCaseCharacter(5);
   }
   if(upperCases){
     upperCaseCharacter(5)
   }
  };


    //Function for generating a special character
  function specialCharacter(length){
    let result = '';
    const specialChars = '!@#$%^&*'
    const specialCharLength = specialChars.length;
    for (var i = 0; i < length; i++){
      result += specialChars.charAt(Math.floor(Math.random()* specialCharLength))
    }
    console.log(result)
    password.push(result)
    }

       //Function for generating a random uppercase character
  function upperCaseCharacter(length){
    let result = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const upperCaseCharsLength = upperCaseChars.length;
    for (var i = 0; i < length; i++){
      result += upperCaseChars.charAt(Math.floor(Math.random()* upperCaseCharsLength))
    }
    console.log(result)
    password.push(result)
    }
    


    //Function for generating a random lowercase character
  function lowerCaseCharacter(length){
    let result = '';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const lowerCaseCharsLength = lowerCaseChars.length;
    for (var i = 0; i < length; i++){
      result += lowerCaseChars.charAt(Math.floor(Math.random()* lowerCaseCharsLength))
    }
    console.log(result)
    password.push(result)
    }
    

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


