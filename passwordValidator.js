const userInput = require('readline-sync');
let checkValidate = false;

function validateUpperCase(enteredPassword) {
    return /[A-Z]/.test(enteredPassword);
}
function validateNumber(enteredPassowrd) {
    return /(\d+)/.test(enteredPassowrd);
}
do {
    let userPassword = userInput.question("Please enter your passsword: ");
    let passwordLength = userPassword.length;
    let checkUpperCase = validateUpperCase(userPassword);
    let checkNumber = validateNumber(userPassword);
    if (passwordLength>=8 && checkUpperCase && checkNumber) {
        console.log("The password you entered meets the requirements.");
        checkValidate = true;
        break;

    }
    else {
    console.log("The password you entered does not meets the requirements.");
    }
} while(!checkValidate);