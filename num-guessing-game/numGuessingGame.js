const min = 1;
const max = 100;
const ans = Math.trunc(Math.random()*(max -min +1)) + min;

let attempts = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt("gues the number: ");
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < min || guess > max){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("too low!! try again.")
        }
        else if(guess > ans){
            window.alert("Too high!! try again.")
        }
        else{
            window.alert(`you won!! total attempts ${attempts}`);
            running = false;
        }
    }
    
}