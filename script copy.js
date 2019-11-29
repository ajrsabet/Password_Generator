




//  create arrays of character types
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '~`!@#$%^&*()_-+={[}]|:;<>.?/",';

// Set variables used in while loop
var userCharList = [];
var passLowerCase = false;
var passUpperCase = false;
var passSpecial = false;
var passNum = false;
// console.log(userCharList)

// ask user password length between 8 and 128
var passLength = prompt("Choose password length with value of 8 to 128");

while (passLength < 8) {
    var passLength = prompt("Try again bucko, I said 8 to 128");
}

// console.log(passLength);

// // user choose character types to be used in the 
while (passLowerCase === false &&
        passUpperCase === false &&
        passSpecial === false &&
        passNum === false) {

            // ask user uppercase letters
            // var passLowerCase = confirm("Would you like to use lowercase letters?");
if (passLowerCase === true) {
    for (let i = 0; i < lowerCase.length; i++) {
        userCharList.push(lowerCase[i])
    }
    
}
// ask user uppercase letters
// var passUpperCase = confirm("Would you like to use uppercase letters?");
if (passUpperCase === true) {
    for (let i = 0; i < upperCase.length; i++) {
        userCharList.push(upperCase[i])
    }
}
// ask user numbers
// var passNum = confirm("Would you like to use numbers?");
if (passNum === true) {
    for (let i = 0; i < numbers.length; i++) {
        userCharList.push(numbers[i])
    }
}
// ask user special characters
// var passSpecial = confirm("Would you like to use special characters?");
if (passSpecial === true) {
    for (let i = 0; i < symbols.length; i++) {
        userCharList.push(symbols[i])
    }
}
// confirm that a selection was made
if (passLowerCase === false &&
    passUpperCase === false &&
    passNum === false &&
    passSpecial === false) {
    // alert("You need to make a selection. Please choose at least one character category.")    
}


// state the perameters set by the user
// console.log(userCharList)


// TODO: generate password using a random character from any of the arrays defined by the user
var passWord = [];

// for (let i = 0; i < passLength; i++) {
//     passWord.push = userCharList[i];
// }

function generatePassword() {
    //YOUR CODE HERE
    
    alert("ive been clicked");
    return "password";
}
   for (let i = 0; i < passLength.valueOf(-1); i++) {
        passWord.push(userCharList[Math.floor(Math.random() * userCharList.length)]);

    }
    var outPut= passWord.join("")

    // for (j=0;j<lenght.valueOf();j++){
    //     result.push(selection[Math.floor(Math.random() * selection.length -1)])
    // }

console.log(passWord);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// Math.floor(Math.random() * userCharList.length)
// while (password.length <= passLength +1) {
//     (let)
// }
// var random = [Math.floor(Math.random() * 10)]




// TODO: compile characters into a new array

// function passwordGen() {


// for (let i = 0; i < userCharList.length; i++) {
// console.log (userCharList[i]); }

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");

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