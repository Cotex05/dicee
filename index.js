console.log("Random try!");

var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Tie! Play Again!";
} 
 //If player 2 wins
 else {
     document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
 }

 function refreshPage() {
     window.location.reload();
 }
