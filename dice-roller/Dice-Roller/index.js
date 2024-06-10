function rollDice() {
    const numDice = document.getElementById("numDice").value;
    const result = document.getElementById("result");
    const diceImage = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numDice; i++){
        const value = Math.trunc(Math.random()*6)+ 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png">`);
    }
    result.textContent = `dice: ${values.join(', ')}`
    diceImage.innerHTML = images.join('');

}   