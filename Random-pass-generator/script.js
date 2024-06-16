const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const nums = "0123456789";
const symbols = "!@#$%^&*()";

const allChars = upperCase + lowerCase + nums + symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += nums[Math.floor(Math.random()*nums.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value = password;
}

function copy(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied");
}
