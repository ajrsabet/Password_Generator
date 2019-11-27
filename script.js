
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE
    alert("ive been clicked");
    return "password";
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER









//  create array of uppercase letters
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var upperCase = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

// for (let i = 0; i < upperCase.length; i++) {
//     console.log (upperCase[i]); 
// }

//  create array of lowercase letters
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';

// for (let i = 0; i < lowerCase.length; i++) {
//     console.log (lowerCase[i]); 
// } 

//  create array of numbers 0-9
var numbers = '0123456789';
// var numbers = ("0","1","2","3","4","5","6","7","8","9");

// for (let i = 0; i < numbers.length; i++) {
//     console.log (numbers[i]); 
// }

// create array of special characters
var symbols = '~`!@#$%^&*()_-+={[}]|:;<>.?/",';

// for (let i = 0; i < symbols.length; i++) {
//     console.log (symbols[i]); 
// }
userCharList = [];
// console.log(userCharList)

// ask user password length between 8 and 128
var passLength = prompt("Choose password length with value of 8 to 128");

while (passLength < 8) {
    var passLength = prompt("Try again bucko, I said 8 to 128");
}

console.log(passLength);

while (userCharList = []) {
    
    // ask user uppercase letters
    var passLowerCase = confirm("Would you like to use lowercase letters?");
    if (passLowerCase === true) {
        for (let i = 0; i < lowerCase.length; i++) {
            userCharList.push (lowerCase [i])
        }
        
    }
    // ask user uppercase letters
    var passUpperCase = confirm("Would you like to use uppercase letters?");
    if (passUpperCase === true) {
        for (let i = 0; i < upperCase.length; i++) {
            userCharList.push (upperCase [i]) 
        }
    }
    // ask user numbers
    var passNum = confirm("Would you like to use numbers?");
    if (passNum === true) {
        for (let i = 0; i < numbers.length; i++) {
            userCharList.push (numbers [i]) 
        }
    }
    // ask user special characters
    var passSpecial = confirm("Would you like to use special characters?");
    if (passSpecial === true) {
        for (let i = 0; i < symbols.length; i++) {
            userCharList.push (symbols [i]) 
        }
    }
}

console.log (userCharList)

// state the perameters set by the user
// console.log("Password perameters: " + passLength + ", " + passUpperCase + ", " + passNum + ", " + passSpecial)

// TODO: generate password using a random character from any of the arrays defined by the user
// TODO: compile characters into a new array

// function passwordGen() {


// for (let i = 0; i < userCharList.length; i++) {
// console.log (userCharList[i]); }
