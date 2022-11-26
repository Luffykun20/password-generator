//assigment code
// create variables for types of characters for password criteria
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "`~@#$%^&*()_-+=";

var generateBtn = document.querySelector("#generate");
// create  generatePassword function
function generatePassword() {
  //create the final outcome variable for generatePassword function
  var finalpassword = ""
  //create variable for prompt function to ask for password length
  var passwordSize = prompt("how many characters do you want between 8-128 in your new password?");
  // create statement for password length
  if (passwordSize >= 8 && passwordSize <= 128) {
    // create variables for confirm functions that will be used  for type of password characters
    var confirmlowercase = confirm("do you want lowercase characters in your new password?");
    var confirmuppercase = confirm("do you want uppercase characters in your new password?");
    var confirmnumeric = confirm("do you want numeric characters in your new password?");
    var confirmspecial = confirm("do you want special characters in your new password?");

    
    for (i = 0; i < passwordSize; i++) {
      
      // loop every confirm function that will be used for types of characters for password criteria
      //create index variable for each type of character string that will be used for password criteria
      //use math.floor and math.random functions to round down and randomly get a number from strings
      // get final password by adding itself with the outcome of every chosen criteria
      if (confirmlowercase && finalpassword.length < passwordSize) {
        var index = Math.floor(Math.random() * 26)
        finalpassword = finalpassword + lowercase[index]

      }
      if (confirmuppercase && finalpassword.length < passwordSize) {
        var index = Math.floor(Math.random() * 26)
        finalpassword = finalpassword + uppercase[index]
      }
      if (confirmnumeric && finalpassword.length < passwordSize) {
        var index = Math.floor(Math.random() * 10)
        finalpassword = finalpassword + numeric[index]
      }
      if (confirmspecial && finalpassword.length < passwordSize) {
        var index = Math.floor(Math.random() * 15)
        finalpassword = finalpassword + special[index]
      }
    }
  }

  // break the whole code if first tatement is false and notify the user
  else {
    alert("choose password size between 8-128 characters")
  }
  return finalpassword

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
