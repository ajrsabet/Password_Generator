//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE

    //  create arrays of character types
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '~`!@#$%^&*()_-+={[}]|:;<>.?/",';


    // Set variables used in while loop
    var userCharList = [];
    var passLength = 0;
    var passLowerCase = false;
    var passUpperCase = false;
    var passSpecial = false;
    var passNum = false;

    var passwordArray = [];

    // while (

    while (passLength < 8 ||
        passLength > 128) {

        // ask user password length between 8 and 128
        var passLength = prompt("Choose password length with value of 8 to 128");
    }
    console.log(passLength);

    while (passLowerCase === false &&
        passUpperCase === false &&
        passSpecial === false &&
        passNum === false) {
        // ask user uppercase letters
        var passLowerCase = confirm("Would you like to use lowercase letters?");
        if (passLowerCase === true) {
            for (let i = 0; i < lowerCase.length; i++) {
                userCharList.push(lowerCase[i])
            }
        }
        console.log(passLowerCase);
        // ask user uppercase letters
        var passUpperCase = confirm("Would you like to use uppercase letters?");
        if (passUpperCase === true) {
            for (let i = 0; i < upperCase.length; i++) {
                userCharList.push(upperCase[i])
            }
        }
        console.log(passUpperCase);
        // ask user numbers
        var passNum = confirm("Would you like to use numbers?");
        if (passNum === true) {
            for (let i = 0; i < numbers.length; i++) {
                userCharList.push(numbers[i])
            }
        }
        console.log(passNum);
        // ask user special characters
        var passSpecial = confirm("Would you like to use special characters?");
        if (passSpecial === true) {
            for (let i = 0; i < symbols.length; i++) {
                userCharList.push(symbols[i])
            }
        }
        console.log(passSpecial);
    }

    // Retrieve form input from index.html
    //    var passLength = document.getElementById("#passLength");
    //    var passLowerCase = document.getElementById("#passLowerCase");
    //    var passUpperCase = document.getElementById("#passUpperCase");
    //    var passNum = document.getElementById("#passNum");
    //    var passSpecial = document.getElementById("#passSpecial");
    // console.log("passLength: " + passLength.valueOf()); 
    // console.log("userCharList: " + userCharList);
    // console.log("passLowerCase: " + passLowerCase);
    // console.log("passUpperCase: " + passUpperCase);
    // console.log("passSpecial: " + passSpecial);
    // console.log("passNum: " + passNum);
    // user choose character types to be used in the 

    for (let i = 0; i < passLength.valueOf(-1); i++) {
        passwordArray.push(userCharList[Math.floor(Math.random() * userCharList.length)]);
    }
    console.log(passwordArray);

    var password = passwordArray.join("");
    console.log(password);
    return password;

    // return password;

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