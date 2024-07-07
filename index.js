// finding element

let totalAttempt = 5;
let attempts =0;
let won =0;
let lost =0;

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostwinMsg = document.createElement("p");
const remainingAttempt = cardBody.querySelector(".remainingAttempt");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
   
    attempts++;
    if(attempts===5){
        guessingNumber.disabled=true;
        checkButton.disabled=true;
    }
    if(attempts<6){
        let guess = Number(guessingNumber.value);
        checkResult(guess);
        remainingAttempt.innerHTML = `remaining attempts: ${totalAttempt-attempts}`
    }
    guessingNumber.value="";
});
function checkResult(value){
    const random = getRandomNumber(5);
    if(value===random){
        resultText.innerHTML =`you have won;`
        won++;
    }
    else{
        resultText.innerHTML =`you have lost ; random number
        was: ${random}`;
        lost++;
    }
    lostwinMsg.innerHTML = `won: ${won},lost: ${lost}`;
    lostwinMsg.classList.add("large-text");
    cardBody.appendChild(lostwinMsg);
}
function getRandomNumber(limit)
{
    return Math.floor(Math.random()*limit) +1;
}
