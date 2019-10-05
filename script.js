//create generate password function
function generatePW() {

//set password length
var length = document.getElementById("password").value;    

//create variable all possible values (upper, lower, special, num) and
var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+;:',<.>/?0123456789";

//create variable that gets set when user hits generate
var password = "";

//create for loop to choose various passwords

for (var i = 0; i <= length; i++) {
    //if (password.value.length >= 8 && password.value.length <= 128) {
    
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}
    document.getElementById("password").value = password;

//add passwords to generated passwords list
    document.getElementById("previousPWs").innerHTML += password + "<br />";    

}