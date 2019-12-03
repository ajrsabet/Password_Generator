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
    var passwordArray = [];
    var passLength = 0;
    var password = "";
    // var passLowerCase = false;
    // var passUpperCase = false;
    // var passSpecial = false;
    // var passNum = false;


    // Retrieve form input from index.html
    var passLength = document.getElementById("checkLength").value;
    var passLowerCase = document.getElementById("checkLowerCase").checked;
    var passUpperCase = document.getElementById("checkUpperCase").checked;
    var passNum = document.getElementById("checkNum").checked;
    var passSpecial = document.getElementById("checkSpecial").checked;

    // user choose character types to be used in the 
    if (passLength < 8 ||
        passLength > 128) {

        // ask user password length between 8 and 128
        alert("Choose password length with value of 8 to 128");
    }

    else if (passLowerCase === false &&
        passUpperCase === false &&
        passSpecial === false &&
        passNum === false) {
        alert("please select at least one character type")
    } else {
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

    for (let i = 0; i < passLength.valueOf(-1); i++) {
        passwordArray.push(userCharList[Math.floor(Math.random() * userCharList.length)]);
    }


    var password = passwordArray.join("");
    return password;
    }
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
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + password.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);