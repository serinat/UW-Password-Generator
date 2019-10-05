//create variable for all possible values (upper, lower, special, num) & prompt possible values
var num = prompt("How many characters would you like? Please choose between 8-128.")
var confirmUpper = confirm("Do you want to include uppercase characters?");
var confirmLower = confirm("Do you want to include lowercase characters?");
var confirmSpecial = confirm("Do you want to include special characters?");
var confirmNumbers = confirm("Do you want to include numbers?");

if (confirmLower === false && confirmUpper === false && confirmSpecial === false && confirmNumbers === false) {
    alert("Please choose at least one criteria.")
}

function generate(num) {

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()-_=+;:',<.>/?";
var numbers = "0123456789";
var all = "";
if (confirmLower) {
    all = all + lower;
}
if (confirmUpper) {
    all = all + upper;
}
if (confirmSpecial) {
    all = all + special;
}
if (confirmNumbers) {
    all = all + numbers;
}
//create variable that gets set when user hits generate
var password = "";

//create for loop to choose various passwords  - FOR EXAMPLE USE VARIABLE USED IN # CHARACTERS PROMPT INSTEAD OF LENGTH
for (var i = 0; i < num; i++) {
    
    var character = Math.floor(Math.random() * all.length);
    password += all.substring(character, character + 1);
}

    document.getElementById("password").value = password;

//add passwords to generated passwords list
    document.getElementById("previousPWs").innerHTML += password + "<br />";    

}

//create copy to clipboard function
function copyPW(){
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}