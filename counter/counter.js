const dec = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const inc = document.getElementById("IncreaseBtn");
const countLable = document.getElementById("countLabel");
let count = 0;

inc.onclick = function(){
    count++;
    countLable.textContent = count;
}
dec.onclick = function(){
    count--;
    countLable.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countLable.textContent = count;
}
